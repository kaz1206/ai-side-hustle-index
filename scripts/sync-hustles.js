import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ エラー: .env ファイルに GEMINI_API_KEY が設定されていません。");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function syncHustles() {
  console.log("🚀 あなたの特別なAPIキーに最適化中...");

  // リストで確認できた、最も確実な最新エイリアスを試します
  const candidates = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let activeModel = null;

  for (const name of candidates) {
    try {
      console.log(`📡 モデル ${name} で接続テスト中...`);
      const model = genAI.getGenerativeModel({ model: name });
      await model.generateContent("test"); // 疎通確認
      activeModel = model;
      console.log(`✅ ${name} が利用可能です！`);
      break;
    } catch (e) {
      console.log(`   ...${name} はスキップ`);
    }
  }

  if (!activeModel) {
    console.error("❌ 利用可能なモデルが見つかりませんでした。");
    return;
  }

  try {
    console.log("💡 副業アイデアを生成中...");
    const prompt = `
      AIを活用した最新の副業アイデアを3つ考案し、以下のJSON形式で出力してください。
      JSON形式:
      [
        {
          "id": "unique-id",
          "title": "タイトル",
          "category": "画像生成/自動化/ライティング/開発/その他",
          "description": "具体的な内容(100文字程度)",
          "difficulty": "初級/中級/上級",
          "profit": "月5-10万円",
          "tags": ["タグ1", "タグ2"],
          "isPremium": false
        }
      ]
    `;

    const result = await activeModel.generateContent(prompt);
    const text = result.response.text();
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    
    if (jsonMatch) {
      const newHustles = JSON.parse(jsonMatch[0]);
      const filePath = path.join(__dirname, "../data/hustles.json");
      const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const updatedData = [...existingData, ...newHustles.map((h, i) => ({
        ...h,
        id: Date.now().toString() + i
      }))];
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      console.log(`✨ 成功！ ${newHustles.length}個の新しいアイデアを追加しました。`);
    }
  } catch (error) {
    console.error("❌ 生成エラー:", error.message);
  }
}

syncHustles();

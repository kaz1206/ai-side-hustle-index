import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function syncHustles() {
  console.log("🚀 AIが新しい副業アイデアを考案中...");

  const prompt = `
    AIを活用した最新の副業アイデアを3つ考案し、以下のJSON形式で出力してください。
    既存のアイデアと被らない、斬新で具体的なものを提案してください。

    JSON形式の例:
    [
      {
        "id": "unique-id",
        "title": "タイトル",
        "category": "カテゴリ(画像生成, 自動化, ライティング, 開発, その他)",
        "description": "具体的な内容(100文字程度)",
        "difficulty": "初級/中級/上級",
        "profit": "想定収益(例: 月5-10万円)",
        "tags": ["タグ1", "タグ2"],
        "isPremium": false
      }
    ]
    出力は純粋なJSONのみを返し、解説などは不要です。
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const newHustles = JSON.parse(text.replace(/```json|```/g, ""));

    const filePath = path.join(__dirname, "../data/hustles.json");
    const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    const updatedData = [...existingData, ...newHustles.map((h, i) => ({
      ...h,
      id: Date.now().toString() + i
    }))];

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log(`✅ ${newHustles.length}個の新しいアイデアを追加しました！`);
  } catch (error) {
    console.error("❌ エラーが発生しました:", error);
  }
}

syncHustles();

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

async function listModels() {
  console.log("🔍 あなたのAPIキーで利用可能なモデルを一覧表示します...");
  
  if (!process.env.GEMINI_API_KEY) {
    console.error("❌ エラー: .env ファイルに GEMINI_API_KEY がありません。");
    return;
  }

  // APIキーの最初と最後だけ表示して確認（セキュリティのため）
  const key = process.env.GEMINI_API_KEY;
  console.log(`🔑 使用中のキー: ${key.substring(0, 5)}...${key.substring(key.length - 4)}`);

  try {
    // raw fetchを使ってモデル一覧を取得（SDKの制限を回避するため）
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const data = await response.json();

    if (data.error) {
      console.error("❌ Google APIからのエラー:", data.error.message);
      return;
    }

    if (data.models && data.models.length > 0) {
      console.log("✅ 以下のモデルが利用可能です:");
      data.models.forEach(m => {
        console.log(`  - ${m.name} (${m.displayName})`);
      });
      console.log("\n💡 この中にある名前を sync-hustles.js に設定すれば動きます。");
    } else {
      console.log("❓ モデルが一つも見つかりませんでした。APIキーの有効期限や制限を確認してください。");
    }
  } catch (error) {
    console.error("❌ 通信エラーが発生しました:", error.message);
  }
}

listModels();

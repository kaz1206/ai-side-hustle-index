import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

async function diagnose() {
  console.log("🛠 API接続診断を開始します...");
  
  if (!process.env.GEMINI_API_KEY) {
    console.error("❌ エラー: .env ファイルに GEMINI_API_KEY がありません。");
    return;
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  try {
    // 1. シンプルな疎通確認
    console.log("📡 Googleサーバーへ接続試行中...");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello");
    console.log("✅ 接続成功！レスポンス:", result.response.text());
  } catch (error) {
    console.error("❌ 接続失敗。詳細エラー内容:");
    console.error("- メッセージ:", error.message);
    console.error("- ステータス:", error.status);
    
    if (error.message.includes("API key not valid")) {
      console.log("💡 解決案: APIキーが間違っているか、コピーミス（前後の空白など）の可能性があります。");
    } else if (error.message.includes("API_KEY_INVALID")) {
      console.log("💡 解決案: キーが無効です。新しく発行したキーを .env に貼り直してください。");
    }
  }
}

diagnose();

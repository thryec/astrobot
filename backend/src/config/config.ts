import dotenv from "dotenv";
import path from "path";

// Load environment variables from root .env file
dotenv.config({ path: path.join(__dirname, "../../../.env.local") });

export const config = {
  botToken: process.env.BOT_TOKEN || "",
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  webAppUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
};

export default config;

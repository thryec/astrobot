import express from "express";
import cors from "cors";
import bot from "./bot";
import config from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
});

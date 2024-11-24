import TelegramBot from "node-telegram-bot-api";
import config from "./config/config";

const bot = new TelegramBot(config.botToken, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome to Cat Community! 😺", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Cat Community",
            web_app: { url: config.webAppUrl },
          },
        ],
      ],
    },
  });
});

export default bot;

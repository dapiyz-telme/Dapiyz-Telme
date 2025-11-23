// index.js
import { vàlz } from "./database/skyxho.js";
import { settings } from "./database/settings.js";
import 㕙 from "node-telegram-bot-api";

const token = settings.tokens;
const skyxho = new 㕙(token, { polling: true });

skyxho.on("polling_error", () => {});

skyxho.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  vàlz(skyxho, chatId, text, msg);
});

console.clear();
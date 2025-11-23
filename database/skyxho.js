// ./database/skyxho.js

import { settings } from "./settings.js";
import chalk from "chalk";
const startTime = Date.now();
export async function runtime() {
  const n = Date.now() - startTime;
  const seconds = Math.floor(n / 1000) % 60;
  const minutes = Math.floor(n / 60000) % 60;
  const hours   = Math.floor(n / 3600000);
  const normal = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return normal.replace(/[0-9]/g, d => ({
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰',
    '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
  })[d]);
}
function pad(num) {
  return num.toString().padStart(2, '0');
}

export async function vàlz(skyxho, chatId, text, msg) {
  const args = text.split(" ");
  const command = args[0].toLowerCase();

  switch(command) {

case "/start":
  const qwe = "­".repeat(225) + "𝗚𝘄 𝗻𝗴𝗮𝗸𝘂 𝗸𝗮𝗹𝗼 𝗴𝘄 𝗸𝗮𝗰𝘂𝗻𝗴🤢🤮" + "­".repeat(225);
  const message = `
<a href="t.me/rexzsuki">𝅷㕙 -𝗦𝗸𝘆𝗫𝗵𝗼𝗕𝗼𝘁💫</a>\n<blockquote><b>[ ☘️ ] —𝗦𝗸𝘆𝗫𝗵𝗼𝗕𝗼𝘁🦠</b></blockquote>\n<blockquote><b>   -بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم-</b></blockquote>\n<b>[ ❐ ] ━⟬ 𝗜𝗡𝗙𝗢 ⟭━ [ ❐ ]</b>\n<b> ➥ 㕙 -𝗕𝗼𝘁 : ${settings.name}</b>\n<b> ➥ 㕙 -𝗗𝗲𝘃 : ${settings.developer}</b>\n<b> ➥ 㕙 -𝗢𝘄𝗻 : <a href="t.me/rexzsuki">𝅷𝗖𝗼𝗻𝘁𝗮𝗰𝘁</a></b>\n<blockquote><b>⏳𝘁𝗶𝗺𝗲 [ ${await runtime()} ]</b></blockquote>\n<code>ⓘ ${settings.version}</code>
`;

  skyxho.sendChatAction(chatId, "record_video_note");

  setTimeout(() => {
    skyxho.sendVideo(chatId, "https://files.catbox.moe/g3teol.mp4", {
      caption: message,
      duration: 252525,
      supports_streaming: true,
      parse_mode: "HTML",
      reply_to_message_id: msg.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: "👤᥆ᥕᥒᥱr", url: settings.owner }, { text: "💸ძ᥆ᥒᥲ𝗍ᥱ", url: settings.donasi }],
          [{ text: qwe, switch_inline_query_current_chat: qwe }]
        ]
      }
    })
    .then(() => {
      const cmd = "/start";
      const sender = msg.from.id;
      const userTime = new Date().toLocaleTimeString();

      console.log(
        chalk.white("\n") + "┏╾" + "<💭" +
        chalk.bgGreen.black("[ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ]") + "> " +
        chalk.cyan.bold(`${cmd}`) + " <⏰" +
        chalk.bgGray.white.bold(`[${userTime}]`) + "> " +
        chalk.white("\n") + "┣" + 
        chalk.yellow.bold(`[ @${sender} ]`) + " " + "©𝗦𝗸𝘆𝗫𝗵𝗼-𝗯𝗼𝘁" +
        chalk.white("\n") + "┗╾≫" + " " +
        chalk.bgRed.black("[️々]") + " " +
        chalk.white.bold("Sending with out message . . .")
      );
    })
  }, 2000);
break;

  }
}
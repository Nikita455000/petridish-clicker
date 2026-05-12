const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("🧬 PetriDish Clicker", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🎮 PLAY",
            web_app: { url: "https://YOUR-RENDER-URL.onrender.com" }
          }
        ]
      ]
    }
  });
});

bot.launch();

console.log("🤖 Bot started");
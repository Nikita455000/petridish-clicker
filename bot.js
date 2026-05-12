const { Telegraf, Markup } = require("telegraf");
const config = require("./config");

const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => {

  ctx.reply(
    "🧬 PetriDish Clicker\n\nНажми кнопку ниже чтобы играть.",
    Markup.inlineKeyboard([
      [
        Markup.button.webApp(
          "🎮 PLAY",
          config.WEBAPP_URL
        )
      ]
    ])
  );

});

bot.launch();

console.log("🤖 Bot started");
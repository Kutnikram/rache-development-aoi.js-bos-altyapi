const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
  token: "Your Bot Token", // Botunuzun Tokeni Gelicek
  prefix: "Bot Prefix", // Botunuzun Prefixi Gelicek ["", ""] Böyle Yazarak Daha Fazla Prefix Ekleyebilirsiniz!
  intents: "all" //Botunuzun İntentleri aoi.leref.ga Adresinden Bakabilirsiniz all Yaparsanız Bütün Hepsini Alır.
});


//--------------CALLBACK--------------\\

bot.onMessage()

//---------------STATUS---------------\\
bot.status({
    text: "Rache Community",
    type: "PLAYING",
    time: 12
  })
  
  bot.status({
    text: "Boş Altyapı",
    type: "WATCHING",
    time: 12
  })


//---------------HANDLER--------------\\
  const loader = new aoijs.LoadCommands(bot)
  loader.load(bot.cmd,"./komutlar/")
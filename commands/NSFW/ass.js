const Discord = require("discord.js");

module.exports = {
  name: "ass",
  category: "nsfw",
  run: async (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.nsfw === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    /*if (!args[0]) return message.reply("Mention someone to fuck!");*/

    const notnsfw = new Discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    var subreddits = [
      "https://images-ext-2.discordapp.net/external/TLitixFDZ96ABBlOsyfM5CrDFD_iLsgACi2N9owqhH8/http/media.obutts.ru/butts_preview/05274.jpg?width=209&height=270",
      "https://images-ext-1.discordapp.net/external/CqtzXS_ujG2XdF6fGz2UAnPwiKEFHXbzXtY40IcenJM/http/media.obutts.ru/butts_preview/03259.jpg?width=360&height=270",
      "https://images-ext-1.discordapp.net/external/OzAgKZqB51uMtuYUWt7z959cwo-RyMdElhsYtmdxU0A/http/media.obutts.ru/butts_preview/05682.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/FtJp8Ac80bckYsBiPzcBPWvyddXDr5wWNIZn0ll9nAo/http/media.obutts.ru/butts_preview/03397.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/XP-01CBmPU9-U2J2ibkka3mmhQc_Z15kgBUH3r4hPOA/http/media.obutts.ru/butts_preview/05153.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/vEf2fOJzxtzZKeFSWAc6D0SM_YlMvwsUWQMZiULmbdg/http/media.obutts.ru/butts_preview/05298.jpg?width=202&height=270",
      "https://images-ext-1.discordapp.net/external/gC5c9nGLohQCP2wRpKnELIMwvdrahWnO69OyqNPgqYk/http/media.obutts.ru/butts_preview/03877.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/gwOOQjG5cSrUzip7ohjlZA1ABkE5aMBo0JHMjw2ZFaY/http/media.obutts.ru/butts_preview/03605.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/NxiVH0cURwLNUdXEzOwXuIi1XiAx4cHz99p7dSOExmo/http/media.obutts.ru/butts_preview/05751.jpg?width=271&height=270",
      "https://images-ext-2.discordapp.net/external/xE9uIflij2D2ZWbtb07HlmZAKwiIW0SzjOkkOX4NHlI/http/media.obutts.ru/butts_preview/05689.jpg?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/Z7jyqj9aecdezXWnjmPcSE_WFB4DzHYlK3KF1fj5Cak/http/media.obutts.ru/butts_preview/05282.jpg?width=210&height=270",
      "https://images-ext-1.discordapp.net/external/C8_xAXYgOEy6kEtfdhKTp0XEQ_9HoA0z6-jNR1Psnpg/http/media.obutts.ru/butts_preview/02931.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/_bXa8sU3jf9DTIdmJQbHIYjoGlkKWw9ZQGXBSkEITHw/http/media.obutts.ru/butts_preview/06523.jpg?width=360&height=202",
      "https://images-ext-1.discordapp.net/external/9MeWukWVrovpkCEr1W0q3Ifk2awjDVVLCRcQxuBc8XQ/http/media.obutts.ru/butts_preview/06283.jpg?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/I3DH8qHvF4QLcR3vY_tivVJt6b21KYe4TKww8nuMMsk/http/media.obutts.ru/butts_preview/05286.jpg?width=154&height=270",
      "https://images-ext-1.discordapp.net/external/XlPCcaZesWTf7sUgsRkFyBBAIRURxSw-puYprlq_v28/http/media.obutts.ru/butts_preview/04960.jpg?width=266&height=270",
      "https://images-ext-1.discordapp.net/external/cMXN_khMAF0bFUhHybGSF7fdcasNR0awB2ghm23pyrY/http/media.obutts.ru/butts_preview/07471.jpg?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/HhaPqUIB2WqWyH2lfhja2ngfpIvmNfGWMthh2Y3LBSc/http/media.obutts.ru/butts_preview/05169.jpg?width=188&height=270",
      "https://images-ext-2.discordapp.net/external/wopzYCRbQ9VywlrbT9oZ9uAsiUdmk-HUiRbIRq0t-OA/http/media.obutts.ru/butts_preview/07358.jpg?width=202&height=270",
      "https://images-ext-1.discordapp.net/external/kAv8xc8gxhMZKmFut7uyjm0QxahMxbC5uNQH6JanHRk/http/media.obutts.ru/butts_preview/03282.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/OoJmfWU2E2sLZsnMOlPRBRN4yz_YesB34C6OEkCgsoY/http/media.obutts.ru/butts_preview/04104.jpg?width=259&height=270",
      "https://images-ext-2.discordapp.net/external/4Ymmg_sa1kU8ShiO_wPczhEpe6MKJBUn-CtkwSZiTrU/http/media.obutts.ru/butts_preview/03393.jpg?width=211&height=270",
      "https://images-ext-2.discordapp.net/external/zManO5PX7lwoP7F1edJhvUl-mA13PvoHc2XZ1VQ5Olw/http/media.obutts.ru/butts_preview/03231.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/yWrmgDUKbG2VFxTFi-FlhuvxMHnoDTQdEv3uqkwJkIo/http/media.obutts.ru/butts_preview/05210.jpg?width=360&height=222",
      "https://images-ext-1.discordapp.net/external/XDfDSGN4sTuO_PqrOtEPGzgYysYRmLxZdJ-033yiDhE/http/media.obutts.ru/butts_preview/06053.jpg?width=360&height=270",
      "https://images-ext-1.discordapp.net/external/OP3lZgtPtD-R9zCcmat01Re_Qk91iT7DghPQ3fBQteg/http/media.obutts.ru/butts_preview/03778.jpg?width=197&height=270",
      "https://images-ext-2.discordapp.net/external/akVcbZFfqZUe5UIdWnyofXE3PIJWBRTBfTflZJNEjMc/http/media.obutts.ru/butts_preview/02958.jpg?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/Xxti3oqMVv-_sav53OxWqBCO1NrZRpfJn865FjIgHsk/http/media.obutts.ru/butts_preview/02882.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/krRgiSW8puFZOvYjoRopfHtWhlYyVY91SbeBmPnL4pc/http/media.obutts.ru/butts_preview/05062.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/dLRlDAebGNOwwqOYrHei_bOrFIinm9wUUFBJE3VuD6g/https/cdn.boob.bot/ass/4CC2.JPG?width=200&height=270",
      "https://images-ext-2.discordapp.net/external/eR4fkWXq70SMFUJ2hy_90gb5QoLtbtoEovuP5dqN1_4/https/cdn.boob.bot/ass/4E93.JPG?width=184&height=270",
      "https://images-ext-1.discordapp.net/external/J6O1qEgsZCpkoQ2tHR8bESxLLoysnsJ59nvll-jRJ_A/https/cdn.boob.bot/ass/5163.JPG?width=188&height=270",
      "https://images-ext-2.discordapp.net/external/Q8o3NGfW_3XWo2cO-PADoJ3S95s2EiSzphhp4rTMNmc/https/cdn.boob.bot/ass/4D0D.JPG?width=184&height=270",
      "https://images-ext-1.discordapp.net/external/j1PQdYdFVxF06cFaU-D042UDidMJxLQUuTToVrH20bk/https/cdn.boob.bot/ass/4CA4.JPG?width=189&height=270",
      "https://images-ext-2.discordapp.net/external/ynab92IzVt6ui6b57AtX10IJPNm2aMVo8GW6G5_KBWs/https/cdn.boob.bot/ass/4F92.JPG?width=186&height=270",
      "https://images-ext-2.discordapp.net/external/z7CFrLBf-JrK59Ghpz3CBeJMg8AN9l4oD6o91dmWfJ0/https/cdn.boob.bot/ass/4F38.JPG?width=182&height=270",
      "https://images-ext-2.discordapp.net/external/4jaB1xUOrNKBCxB6wb59tmIFAzPOatZATrFLK1J1jhc/https/cdn.boob.bot/ass/4EB1.JPG?width=185&height=270",
      "https://images-ext-2.discordapp.net/external/aZER7tq0Bibe1e0uf9rVkh61pMbVVkp8m95BAhKmWnA/https/cdn.boob.bot/ass/4D76.JPG?width=190&height=270",
      "https://images-ext-2.discordapp.net/external/PVeewbyjLDDMhoxTtaoJ_qudFTDVF0AO9VcW5y4DsQ0/https/cdn.boob.bot/ass/4CB3.JPG?width=189&height=270"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    /*var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to fuck.`);
    }*/

    if (message.channel.nsfw === true) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        /*.setDescription(
          `:point_right::ok_hand: ${message.author} fucked **${user}**`
        )*/
        .setImage(sub);

      message.channel.send(embed);
    } else {
      message.channel.send(notnsfw);
    }
  }
}
}
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let disabled = 0;
    /*if (!args[0]) return message.reply("Mention someone to fuck!");*/

    const notnsfw = new Discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    var subreddits = [
      "https://images-ext-2.discordapp.net/external/7-XKkGfxQ5zBwV5te99-xJBrqxx2Ug9qZQfo-VPOSWI/https/i.redd.it/vjvm0g643zp41.jpg?width=220&height=270",
      "https://images-ext-1.discordapp.net/external/iAQAKGc61Tqnm0JWXSH_chdQC-SBWTLi6wVBFwqViQU/https/i.redd.it/co1373z962q41.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/n9xO3jzPZ91olik8pOeGOaQYkZBGOEgdRPWkHnGxzCc/https/i.imgur.com/E68Sfvc.jpg?width=360&height=229",
      "https://images-ext-1.discordapp.net/external/hag16zx86KnCPEBYyeZrpfxmLxqnczC-CJy12JYRx_Q/https/i.imgur.com/2V5eT6O.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/QiVJ0rvM3VKjJZvis230IbX0CSBieb-b8NvhGhEgixw/https/i.redd.it/ipwzelyc1rv41.jpg?width=203&height=270",
      "https://images-ext-2.discordapp.net/external/_F438kzYk5zPvLLNgB14_OkX1Ty4U-Ca77OROcEydek/https/i.imgur.com/aJmum6S.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/s5os-dkA-q3q-G1xvm07RLQN_zAFbu4jJhCNqiRoHk8/https/i.imgur.com/PaXTKum.jpg?width=360&height=270",
      "https://images-ext-2.discordapp.net/external/3gtM8gYD5rlx2VzQmqI36S73QZLVHqjXhRfx_8eTXjs/https/i.imgur.com/IAwQfFW.jpg?width=360&height=270",
      "https://images-ext-1.discordapp.net/external/-PQRrvYXyPpDvB74RdidBz2f7PFqXFz8aURnH__YaHs/https/i.redd.it/yykd0zkdxpv41.gif?width=292&height=270",
      "https://images-ext-2.discordapp.net/external/BWuaHT_hrJDAoPQnZnwgKWO-doA7A-e15RwaMBRqguc/https/i.imgur.com/t3XJAkX.jpg?width=215&height=270",
      "https://images-ext-1.discordapp.net/external/jNYgebWfGyYks5R8RxE7qj0pWekWJyAxkkm7Xbtt53g/https/i.imgur.com/ILHH7EA.jpg?width=152&height=270",
      "https://images-ext-1.discordapp.net/external/2RrGapyBzki0lY86bB4krTaReWNECLMDhEAoI57-KH4/https/i.redd.it/m3mgzjcn3eu41.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/W-l9Pf2bxJElkAcTG98Jv7Pm0ip7PcXz67uUXxjiDec/https/cdn.boob.bot/pussy/A60A.jpg?width=184&height=270",
      "https://images-ext-1.discordapp.net/external/V9jxwaCdUo1X_KtteRG9De2krqVFXchyjBuuWV0gQTk/https/cdn.boob.bot/pussy/1128C.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/NvuUMUT-N5Otyr2exZqjr1W3y_hskW037GxMjg_DVpA/https/cdn.boob.bot/pussy/D3BA.jpg?width=360&height=180",
      "https://images-ext-2.discordapp.net/external/hfYy2MzdMu7Rdt9HTovkmmzbiLL4LB1X8I4fZMARk_A/https/cdn.boob.bot/pussy/4D30.jpg?width=203&height=270",
      "https://images-ext-2.discordapp.net/external/ml15cCtRh_FhQ1TfolglywcjsUB1eayU0O6Bdzeq3fc/https/cdn.boob.bot/pussy/8B7A.jpg?width=360&height=270",
      "https://images-ext-1.discordapp.net/external/-A5AYJG_EkSb4hCfjX3wlTZJ0FnG3t7su28lWLl52es/https/cdn.boob.bot/pussy/6FDA.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/BJZ28fSezy9atb3MPVgm29tUxuEAoxjszqA-R4tL_CY/https/cdn.boob.bot/pussy/F90C.jpg?width=360&height=263",
      "https://images-ext-1.discordapp.net/external/Trws38OlFHpV4I4kt8UYt4rS4hm83lrXR8vwFCrHzq4/https/cdn.boob.bot/pussy/11F6E.png?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/GCSTGLERRYVmLNk2p8pF8oPOqEFPUb1NEwQ1Bx_0t1Y/https/cdn.boob.bot/pussy/C60C.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/k1NpAu5kWVB5co80tgSKDK4g1Sbpw2oWAfPX2c-F-oA/https/cdn.boob.bot/pussy/E3CC.jpg?width=360&height=270"
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
};

module.exports = {
  name: "pussy",
  category: "nsfw",
  description: "Gives you a pussy."
}
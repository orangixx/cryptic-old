const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
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
      "https://images-ext-2.discordapp.net/external/oA-ccZWMXZCOGRQ6T1PcbDZZk6q9kADLXdm-npzcLQs/https/cdn.boob.bot/cumsluts/9330.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/otOTOS6S3hARu7DhN_fEx_hTKfq1IwI7f_RGkV4rxEs/https/cdn.boob.bot/cumsluts/7959.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/yWgs-1P24zePLf8Tmq-oClWZj_gq4UPqSesJ6gK1qiA/https/cdn.boob.bot/cumsluts/BDB5.jpg?width=197&height=270",
      "https://images-ext-1.discordapp.net/external/stXGTHjTzinHTlnIjttTlBbA_4uJExUkKi13eF0_xjw/https/cdn.boob.bot/cumsluts/9402.gif?width=360&height=200",
      "https://images-ext-1.discordapp.net/external/m6lJM0hNtHLgd0SXy8vn97K46AqREW5kmjzxxSjlAOk/https/cdn.boob.bot/cumsluts/4105.jpg?width=360&height=215",
      "https://images-ext-1.discordapp.net/external/kqXfD4OQeDKtph-VQ7aLnxhb2pU30Cqox9yxnF7Zo6s/https/cdn.boob.bot/cumsluts/46E6.jpg?width=325&height=270",
      "https://images-ext-2.discordapp.net/external/3dbf-nEaeGQZAka_2CvVPPsSigsDqoRZpEWqPVvYZeg/https/cdn.boob.bot/cumsluts/8E8A.gif?width=360&height=256",
      "https://images-ext-2.discordapp.net/external/x6gblALovIzHwaBTGPsni3TkQu7M4AKQjJTWUJQwNvI/https/cdn.boob.bot/cumsluts/9934.png?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/sNC_pR2FHk1fxsB5nryuoSQ0S2DkYKYRaK9cqBVg_n4/https/cdn.boob.bot/cumsluts/B955.jpg?width=360&height=270",
      "https://images-ext-2.discordapp.net/external/YvUhFc8LyTzvygrKWpeXjFdhNOhTDJIaPIsPjVuOirY/https/cdn.boob.bot/cumsluts/60BD.gif?width=345&height=270"
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
};

module.exports = {
  name: "cumsluts",
  category: "nsfw"
}
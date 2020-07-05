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
      "https://images-ext-2.discordapp.net/external/0sZm6r-XGPCL3eQtmRiLyZ4P0cf7ipfVNEJstUM0TXk/https/cdn.boob.bot/black/5028.JPG?width=360&height=228",
      "https://images-ext-2.discordapp.net/external/YyRzJB4Sma0yboEfGWfyH_GY1JbOuPbloa9OHzLdMyw/https/cdn.boob.bot/black/4E57.JPG?width=185&height=270",
      "https://images-ext-1.discordapp.net/external/cErxeRhs1lJ-rbda2LBjldsBOWy3fvIRzmRWvWGEdik/https/cdn.boob.bot/black/4ECF.JPG?width=189&height=270",
      "https://images-ext-1.discordapp.net/external/gtNJt82VmX7NT72oWxqsDjpg7FmfKTHklbp07X7tL84/https/cdn.boob.bot/black/4D58.JPG?width=200&height=270",
      "https://images-ext-1.discordapp.net/external/VTNsaMZQnkNfrA-AWxjsF2LjgBWYO6MQRgkB8WvLF0g/https/cdn.boob.bot/black/5172.JPG?width=191&height=270",
      "https://images-ext-2.discordapp.net/external/tnQvFTUJLWfyINJIruv_5VqsChq5ogvy0G6TSIRZN6g/https/cdn.boob.bot/black/4EDE.JPG?width=360&height=211",
      "https://images-ext-2.discordapp.net/external/uB-t3IBYELkc9ywAgBBqQqWoatH9jrW2osyv24wgdcA/https/cdn.boob.bot/black/4DB2.JPG?width=191&height=270",
      "https://images-ext-1.discordapp.net/external/xrxvrQaAK3qEBljDIWNnrr0SqJh7Y6vDhJryxFt2SqE/https/cdn.boob.bot/black/4F29.JPG?width=191&height=270",
      "https://images-ext-2.discordapp.net/external/RBQQFqU3AYzGIX8BFAioYQPVYDGSD1HHhU0f8rxNo7o/https/cdn.boob.bot/black/5091.JPG?width=360&height=232",
      "https://images-ext-1.discordapp.net/external/fajwxaVckKoEgjmWq-iGRYRyzlsEbO_S9HMzU2JBQSo/https/cdn.boob.bot/black/51BD.JPG?width=191&height=270"
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
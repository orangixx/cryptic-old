const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.action === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    if (!args[0]) return message.reply("Mention someone to kiss!");

    var subreddits = [
      "http://giphygifs.s3.amazonaws.com/media/65q20mgdnTtyU/giphy.gif",
      "https://media.giphy.com/media/PFjXmKuwQsS9q/giphy.gif",
      "https://media.giphy.com/media/KMuPz4KDkJuBq/giphy.gif",
      "https://media.giphy.com/media/fyM2loi1ZpOV2/giphy.gif",
      "https://media.giphy.com/media/v5YhrRFBVf3bi/giphy.gif",
      "https://media.giphy.com/media/HKQZgx0FAipPO/giphy.gif",
      "https://media.giphy.com/media/2WSKVHnTUIukM/giphy.gif",
      "https://media.giphy.com/media/2yU2Vc0hASaqs/giphy.gif",
      "https://media.giphy.com/media/3o6ozHbQHZzDTxRjsA/giphy.gif",
      "https://media.giphy.com/media/l46CDjJcScEHnuAyk/giphy.gif"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to kiss.`);
    }
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`:kiss: ${message.author} is kissing **${user}** :kiss:`)
      .setImage(sub);
    message.channel.send({
      embed
    });
  }
};
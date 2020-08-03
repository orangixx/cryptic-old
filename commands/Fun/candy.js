const Discord = require("discord.js");
module.exports.run = (client, message, args, tools) => {
  var fs = require("fs");
    if (!args[0]) {
      const buyEmb = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(
          `:candy: ${message.author.username} bought themselves some candy! :candy:`
        )
        .setImage("https://data.whicdn.com/images/29808733/original.gif");
      message.channel.send({ embed: buyEmb });
      return;
    }

    if (
      !message.mentions.members.first().user.username ===
      message.isMentioned(message.author)
    ) {
      const candyEmb = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(
          `:candy: ${message.author.username} gave ${
            message.mentions.members.first().user.username
          } some candy! :candy:`
        )
        .setImage(
          "https://78.media.tumblr.com/427ed12ad003c4dae17f31a198396656/tumblr_nxxqz5SRlY1uf9lmco1_500.gif"
        );
      message.channel.send({ embed: candyEmb });
      return;
    }
    const buyEmb = new Discord.MessageEmbed()
      .setColor("#8b0000")
      .setTitle(
        `:candy: ${message.author.username} bought themselves some candy! :candy:`
      )
      .setImage("https://data.whicdn.com/images/29808733/original.gif");
    message.channel.send({ embed: buyEmb });
};

module.exports = {
  name: "candy",
  category: "fun"
}
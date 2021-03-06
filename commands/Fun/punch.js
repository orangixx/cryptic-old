const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");
    if (!args[0]) return message.reply("Mention someone to punch!");

    var subreddits = [
      "https://media.giphy.com/media/GoN89WuFFqb2U/giphy.gif",
      "https://media.giphy.com/media/PO9aIzHerOX1S/giphy.gif",
      "https://media.giphy.com/media/x26sUkzjp55O8/giphy.gif",
      "https://media.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif",
      "https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif",
      "https://media.giphy.com/media/DViGV8rfVjw6Q/giphy.gif",
      "https://media.giphy.com/media/D6FoVWHnl3Hy0/giphy.gif",
      "https://media.giphy.com/media/DPdz7j7tUefxm/giphy.gif"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to punch.`);
    }
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`${message.author} is punching **${user}**`)
      .setImage(sub);
    message.channel.send({
      embed
    });
};

module.exports = {
  name: "punch",
  category: "fun",
  description: "Punch someone virtually."
}
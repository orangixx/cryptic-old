const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {};

module.exports.run = async (client, message, args, default_prefix) => {
  var fs = require("fs");

  var user2 = message.mentions.members.last();
  if (!user2) {
    message.reply("Mention a user to see how gay they are!");
    return;
  }
    let gay = Math.round(Math.random() * 100);
    let taggedUser = message.mentions.users.first() || message.author;

    let gayembed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle(
        `:gay_pride_flag: **I think ${
          message.mentions.members.first().user.username
        } is ${gay}% gay!** :gay_pride_flag:`
      );
    return message.channel.send(gayembed);
};

module.exports = {
  name: "howgay",
  category: "fun"
}

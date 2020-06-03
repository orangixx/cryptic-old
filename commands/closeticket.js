const{ Client, Collection, MessageEmbed } = require("discord.js");

module.exports.help = {
  name: "close",
  aliases: ["end"]
}

module.exports.run = async(Client, message, args) => {
  message.channel.delete();
}

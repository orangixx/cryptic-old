const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");
    const embed = new Discord.MessageEmbed()

      /*.setAuthor(
        `Command used by ${message.author.tag}`,
        message.author.displayAvatarURL
      )*/
      .setDescription(args.join(" "))
      .setColor("BLUE");
    message.channel.send(embed);
    //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry but you need the `MANAGE_MESSAGES` permission to use this command")
    message.delete();
};

module.exports = {
  name: "embed",
  category: "administration"
}
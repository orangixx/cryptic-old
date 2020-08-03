const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");
    if (args[0] === undefined) {
      return message.channel.send(
        "I need a character to get its unicode form!"
      );
    } else {
      let transArg = args[0].toLowerCase();

      if (transArg === undefined) {
        return message.channel.send(
          "Type one character to get its unicode form!"
        );
      } else {
        if (transArg.length >= 2) {
          return message.channel.send(
            `Too long ${message.author}; you can only enter **1** character.`
          );
        }

        const embed = new Discord.MessageEmbed()
          .setDescription(transArg.charCodeAt(0))
          .setColor("BLUE");
        return message.channel.send(embed);
      }
    }
};

module.exports = {
  name: "unicode",
  category: "miscellaneous",
  description: "Get unicode everybody!"
}
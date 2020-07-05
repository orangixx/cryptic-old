const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.other === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
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
  }
};
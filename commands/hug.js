const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {};

module.exports.run = async (bot, message, args, default_prefix) => {
  var fs = require("fs");

  var user2 = message.mentions.members.last();
  if (!user2) {
    message.reply("Mention a user to see how gay they are!");
    return;
  }
  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.fun === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
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
  }
};

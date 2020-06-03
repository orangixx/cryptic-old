const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed();
  var fs = require("fs");
  let owner = client.users.cache.get("405497010385321995");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.other === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    //.setDescription(args.join(' '))
    //message.channel.send(embed)
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "It looks like you are not able to use this command, you need the `MANAGE_MESSAGES` permission to use this command"
      );
    message.delete();

    message.delete() && message.channel.send(args.join(" "));
  }
};

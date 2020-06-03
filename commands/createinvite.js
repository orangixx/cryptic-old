const Discord = require("discord.js");
const bypass = ["405497010385321995"];

exports.run = async (anko, message, args, color) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
    message.channel.createInvite({ maxAge: 0 }).then(invite => {
      let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Cryptic's support server!")
        .setDescription(
          `**Invite Link**: [Cryptic's Support Server](https://discord.gg/tpGHaGg)`
        )
        .setTimestamp();
      message.channel.send(embed);
    });
  }
};

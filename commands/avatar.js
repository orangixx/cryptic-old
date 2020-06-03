const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "Info",
  description: "Returns the mentioned users avatar.",
  run: async (client, message, args) => {
    let user = message.mentions.users.first()
      ? message.mentions.users.first()
      : message.author;
    let embedColor = message.member.roles.highest.color
      ? message.member.roles.highest.color
      : "GREEN";

    let avURL = user.displayAvatarURL({ size: 512 });

    let avEmbed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(`${user.username}'s avatar`)
      .setImage(avURL)
      .setFooter(
        `Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      )
      .setTimestamp();

    return message.channel.send(avEmbed);
  }
};

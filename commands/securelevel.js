const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "securelevel",
  category: "info",
  description: "Generates a score based on this server's security",
  run: async (client, message, args) => {
    const numberifyobj = { NONE: 1, LOW: 2, MEDIUM: 3, HIGH: 4, VERY_HIGH: 5 };
    const numberify2obj = {
      DISABLED: 1,
      MEMBERS_WITHOUT_ROLES: 2,
      ALL_MEMBERS: 3
    };
    let mfaLevel = message.guild.mfaLevel;
    let verificationLevel = numberifyobj[message.guild.verificationLevel];
    let explicitContentFilter =
      numberify2obj[message.guild.explicitContentFilter];

    let score = Math.floor(
      ((mfaLevel + verificationLevel + explicitContentFilter) / 9) * 100
    );
    let embed = new MessageEmbed()
      .setAuthor(`Server Secure Level Analysis`, message.guild.iconURL())
      .setTitle(`Secure Percentage: ${score}%`)
      .setColor("GREEN")
      .setFooter(
        `Powered By ${client.user.username}`,
        client.user.displayAvatarURL()
      );
    message.channel.send(embed);
  }
};

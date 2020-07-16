const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "si2",
  category: "miscellaneous",
  run: async (client, message, args) => {
    let guildinfo = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.guild.name}'s Info`)
      .addField("Owner", `\<@${message.guild.owner.user.id}>`)
      .addField("Server ID", `${message.guild.id}`)
      .addField(
        "Members",
        `Total Users: ${message.guild.memberCount}\nMembers: ${
          message.guild.members.cache.filter(m => !m.user.bot).size
        }\nBots: ${message.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .addField(
        "Humans",
        message.guild.members.cache.filter(member => !member.user.bot).size,
        true
      )
      .addField(
        "Bots",
        message.guild.members.cache.filter(member => member.user.bot).size,
        true
      )
      .addField("Channels", message.guild.channels.cache.size, true)
      .addField(
        "Voice Channels",
        message.guild.channels.cache.filter(channel => channel.type === "voice")
          .size,
        true
      )
      .addField(
        "Categories",
        message.guild.channels.cache.filter(
          channel => channel.type === "category"
        ).size,
        true
      )
      .addField(
        "Roles",
        message.guild.roles.cache.map(c => c.name).join(", "),
        true
      )
      .setFooter(message.guild.id, client.user.avatarURL())
      .setTimestamp(message.channel.guild.createdAt)
      .setThumbnail(message.guild.iconURL());
    message.channel.send({ embed: guildinfo });
  }
};
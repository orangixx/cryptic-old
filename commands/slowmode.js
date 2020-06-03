const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "slowmode",
  category: "Moderation",
  description: "Sets a slowmode for a channel.",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.reply("You don't have permission to execute this command");
    }
    let channel =
      message.guild.channels.cache.find(
        c => c.name.toLowerCase() === args[0]
      ) ||
      message.guild.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please specify a channel to set slowmode.");
    }

    if (isNaN(args[1])) {
      return message.channel.send("Please provide a valid number!");
    }

    channel.setRateLimitPerUser(args[1]);

    let embed = new MessageEmbed()
      .setTitle(`🚨Slowmode Activated🚨`)
      .setDescription(`**Moderator:** ${message.author.tag}`)
      .setFooter(
        `Powered By ${client.user.username}`,
        client.user.displayAvatarURL()
      );

    channel.send(embed);
    message.delete({ timeout: 5000 });
  }
};

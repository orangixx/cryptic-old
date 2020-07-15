const { MessageEmbed, Client } = require("discord.js");

module.exports = {
  name: "unlocks all channels",
  category: "Moderation",
  description: "Locks The Current Channel.",
  run: async (client, message, args) => {
    if (message.deleteable) message.delete();

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message
        .reply("You don't have permission to unlock channels. You need the `MANAGE_CHANNELS` permission.")
       // .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    const unlockChannel = message.channel;
    const guild = message.guild;

    for (const role of [guild.roles.everyone]) {
      await unlockChannel.updateOverwrite(
        role,
        {
          SEND_MESSAGES: true
        },
        "🔓 UNLOCKING THE CHANNEL..."
      );
    }

    const unlockedEmbed = new MessageEmbed()
      .setTitle("🔓 CHANNEL UNLOCKED")
      .setColor("GREEN")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp();

    message.channel.send(unlockedEmbed);
  }
};
const { MessageEmbed, Client } = require("discord.js");

module.exports = {
  name: "lock all channels",
  category: "Moderation",
  description: "Locks The Current Channel.",
  run: async (client, message, args) => {
    if (message.deleteable) message.delete();

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.reply(
        "You don't have permissions to lock channels. You need the `MANAGE_CHANNELS` permission."
      );
      // .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    const lockChannel = message.channel;
    const guild = message.guild;

    for (const role of [guild.roles.everyone]) {
      await lockChannel.updateOverwrite(
        role,
        {
          SEND_MESSAGES: false
        },
        "🔓 LOCKING THE CHANNEL..."
      );
    }

    const lockedEmbed = new MessageEmbed()
      .setTitle("🔒 CHANNEL LOCKED")
      .setColor("RED")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp();

    message.channel.send(lockedEmbed);
  }
};

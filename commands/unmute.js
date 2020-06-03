var Discord = require("discord.js");

module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You do not have perms to use this command.");
    }

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "I do not have permission to `MANAGE_MESSAGES`."
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the user that you want to unmute."
      );
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("That user is not muted.");
    }

    user.roles.remove(muterole);

    await message.channel.send(
      `**${message.mentions.users.first().username}** has been unmuted!`
    );

    user.send(`You have been unmuted from **${message.guild.name}**`);

    var channel = message.guild.channels.cache.find(c => c.name === "mod-log");

    var log = new Discord.MessageEmbed()
      .setTitle("User Unmuted")
      .addField("User:", user, true);
    channel.send(log);
  }
};

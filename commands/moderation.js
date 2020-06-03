const discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      `**${message.author.username}**, You do not have perms to use this command`
    );
  }

  let owner = client.users.cache.get("");
  let boticon = client.users.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptics's Moderation Commands")
    .setDescription("`ban\nmute\nunmute\nwarn\nclear\nkick\nlock\nnuke\nslowmode\nunban\nunlock`")
    .setFooter(
      "Use c! before each command! For support, join: https://discord.gg/5wbQMxA"
    )
    .setColor("RANDOM")
    .setThumbnail(boticon);
  message.channel.send(embed);
};

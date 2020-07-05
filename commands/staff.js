const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "staff",
  category: "Info",
  decription: "Lists all staff members",
  run: async (client, message, args) => {
    let guild = await message.guild.fetch();
    let administrators = guild.members.cache.filter(
      m => m.hasPermission("ADMINISTRATOR") && !m.user.bot
    );
    let moderators = guild.members.cache.filter(
      m =>
        !administrators.has(m.id) &&
        m.hasPermission("MANAGE_MESSAGES") &&
        !m.user.bot
    );
    let embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addField(
        "Administrators",
        administrators.size > 0
          ? administrators.map(a => `${a.user.tag}`).join("\n")
          : "No Admin"
      )
      .addField(
        "Moderators",
        moderators.size > 0
          ? moderators.map(m => `${m.user.tag}`).join("\n")
          : "No Moderator"
      )
      .setColor("RANDOM")
      .setFooter(client.user.username, client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
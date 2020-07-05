const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("ADD_REACTIONS"))
    return message.reply(
      "Sorry, I dont have the perms to use this command, I need ADD_REACTIONS. :x:"
    );
  const sayMessage = args.join(" ");
  if (sayMessage.length < 1)
    return message.channel.send("Didn't provide a suggestion!");
  const embed = new Discord.MessageEmbed()
    .setColor(0x00a2e8)
    .addField("Suggestion:", `**${sayMessage}**!`)
    .setFooter(
      "Suggestion by " + message.author.username,
      message.author.avatarURL
    )
    .setTimestamp();
  message.delete();
  message.channel.send({ embed }).then(m => {
    m.react("✅");
    m.react("❌");
  });
};
const {MessageEmbed} = require("discord.js");
module.exports = async(message) => {
  let embed = new MessageEmbed()
  .setTitle("**Message Deleted**")
  .setDescription(`${message.author.tag} deleted a message in <#${message.channel.id}>`)
  .addField("Deleted Message:", message.content, true)
  .setColor("RED")
  let channel = message.guild.channels.cache.find(ch => ch.name === "server-log")
  if(!channel) return;
  channel.send(embed)
}

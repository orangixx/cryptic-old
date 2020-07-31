const {MessageEmbed} = require("discord.js");
module.exports = async(oldMessage, newMessage) => {
  let embed = new MessageEmbed()
  .setTitle("**Message Edited**")
  .setDescription(`${oldMessage.author.tag} edited a message in <#${oldMessage.channel.id}>`)
  .addField("Old Message", oldMessage.content, true)
  .addField("New Message", newMessage.content, true)
  .setColor("GREEN")
  let channel = oldMessage.guild.channels.cache.find(ch => ch.name === "server-log")
  channel.send(embed)
}

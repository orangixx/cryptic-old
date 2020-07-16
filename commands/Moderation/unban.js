const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "moderation",
  async run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have perms to use this command.")
    let member = client.users.cache.get(args[0]) || client.users.cache.fetch(args[0]).catch(() => null)
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have the BAN_MEMBERS permissions")
    message.guild.members.unban(member.id);
    return message.channel.send(`${member.tag} Has been unbanned!`)
  }
}
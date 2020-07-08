  const db = require("quick.db");

  module.exports = {
  name: "setprefix",
  description: "Sets a servers prefix",

  async run (client, message, args) {
      if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don\'t have perms to use this command.");

      if (!args[0]) return message.channel.send("Please provide a new prefix.");

      if (args[1]) return message.channel.send("The prefix can\'t have 2 spaces in it.");

      db.set(`prefix_${message.guild.id}`, args[0])

      message.channel.send(`Prefix successfully set to **${args[0]}**`)
  }
 }

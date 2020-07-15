var Discord = require("discord.js");
var ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You can't use that!");

  var user = message.mentions.users.first();
  if (!user)
    return message.reply("**Usage:** `c!mute <@user> <time (10s, 1m, 1h, 1d)`");

  var member;

  try {
    member = await message.guild.members.fetch(user);
  } catch (err) {
    member = null;
  }

  if (!member) return message.reply("That user is not in the server.");
  if (member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You cannot mute that user!");

  var rawTime = args[1];
  var time = ms(rawTime);
  if (!time) return message.reply("You didn't specify a time!");

  var reason = args.splice(2).join(" ");
  if (!reason) message.reply("You need to give a reason!");

 var channel = message.guild.channels.cache.find(c => c.name === "mod-log");

  var log = new Discord.MessageEmbed()
    .setTitle("User Muted")
    .addField("User:", user, true)
    .addField("By:", message.author, true)
    .addField("Expires In:", rawTime)
    .addField("Reason", reason);
  channel.send(log);

  var embed = new Discord.MessageEmbed()
    .setTitle("You were muted!")
    .addField("Expires In:", rawTime, true)
    .addField("Reason:", reason, true);

  try {
    user.send(embed);
  } catch (err) {
    console.warn(err);
  }

  var role = message.guild.roles.cache.find(r => r.name === "Muted");

  member.roles.add(role);

  setTimeout(async () => {
    member.roles.remove(role);
  }, time);

  message.channel.send(
    `**${user}** has been muted by **${message.author}** for **${rawTime}**!`
  );
};

module.exports = {
  name: "mute",
  category: "moderation",
  description: "Mute someone with some nice Moderation :D"
}
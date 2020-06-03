var Discord = require("discord.js");
var ms = require("ms");

exports.run = async (client, msg, args) => {
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    return msg.reply("You can't use that!");

  var user = msg.mentions.users.first();
  if (!user)
    return msg.reply("**Usage:** `c!mute <@user> <time (10s, 1m, 1h, 1d)`");

  var member;

  try {
    member = await msg.guild.members.fetch(user);
  } catch (err) {
    member = null;
  }

  if (!member) return msg.reply("That user is not in the server.");
  if (member.hasPermission("MANAGE_MESSAGES"))
    return msg.reply("You cannot mute that user!");

  var rawTime = args[1];
  var time = ms(rawTime);
  if (!time) return msg.reply("You didn't specify a time!");

  var reason = args.splice(2).join(" ");
  if (!reason) msg.reply("You need to give a reason!");

 var channel = msg.guild.channels.cache.find(c => c.name === "mod-log");

  var log = new Discord.MessageEmbed()
    .setTitle("User Muted")
    .addField("User:", user, true)
    .addField("By:", msg.author, true)
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

  var role = msg.guild.roles.cache.find(r => r.name === "Muted");

  member.roles.add(role);

  setTimeout(async () => {
    member.roles.remove(role);
  }, time);

  msg.channel.send(
    `**${user}** has been muted by **${msg.author}** for **${rawTime}**!`
  );
};

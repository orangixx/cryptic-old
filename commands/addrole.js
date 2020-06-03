const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("You do not have perms to use that command.");
  if (args[0] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.cache.get(args[0]);
  if (!rMember) return message.reply("I couldn't find that user.");
  let role = args.slice(1).join(" ");
  if (!role) return message.reply("Please specify a role!");
  let gRole = message.guild.roles.cache.find(element => element.name === role);
  if (!gRole) return message.reply("I couldn't find that role.");

  if (rMember.roles.cache.has(gRole.id));
  await rMember.addRole(gRole.id);

  try {
    await rMember.send(`Congrats, You have been given the role ${gRole.name}`);
  } catch (e) {
    message.channel.send(
      `Congrats <@${rMember.id}>, You have been given the role ${gRole.name}. We tried to DM you, but your DMs were locked.`
    );
  }
};

module.exports.help = {
  name: "addrole"
};

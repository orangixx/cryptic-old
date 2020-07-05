var Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You can\'t use that!');
  
  var user = message.mentions.users.first();
  if(!user) return message.reply('**Usage:** `c!warn <@user> <reason>`');
  
  var member;
  
  try {
    member = await message.guild.members.fetch(user);
  } catch(err) {
    member = null;
  }
  
  if(!member) return message.reply('That user is not in the server.');
  
  var reason = args.splice(1).join(' ');
  if(!reason) message.reply('You need to give a reason!');
  
  var channel = message.guild.channels.cache.find(c => c.name === 'mod-log');
  
  var log = new Discord.MessageEmbed()
  .setTitle('User Warned')
  .addField('User:', user, true)
  .addField('By:', message.author,true)
  .addField('Reason', reason)
  channel.send(log);
  
  var embed = new Discord.MessageEmbed()
  .setTitle('You were warned!')
  .setDescription(reason);
  
  try {
    user.send(embed);
  } catch(err) {
    console.warn(err);
  }
  
  message.channel.send(`**${user}** has been warned by **${message.author}**!`);
}
var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
  if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');
  
  var user = msg.mentions.users.first();
  if(!user) return msg.reply('**Usage:** `c!warn <@user> <reason>`');
  
  var member;
  
  try {
    member = await msg.guild.members.fetch(user);
  } catch(err) {
    member = null;
  }
  
  if(!member) return msg.reply('That user is not in the server.');
  
  var reason = args.splice(1).join(' ');
  if(!reason) msg.reply('You need to give a reason!');
  
  var channel = msg.guild.channels.cache.find(c => c.name === 'mod-log');
  
  var log = new Discord.MessageEmbed()
  .setTitle('User Warned')
  .addField('User:', user, true)
  .addField('By:', msg.author,true)
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
  
  msg.channel.send(`**${user}** has been warned by **${msg.author}**!`);
}
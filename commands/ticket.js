const { MessageEmbed } = require("discord.js");

const fs = require("fs");
const util = require("util");

var current_date = new Date();

module.exports = {
  name: "ticket",
  category: "moderation",
  description: "Opens A Ticket",
  run: async (client, message, args) => {
      
    let supportRole = message.guild.roles.cache.get('705344500578648119');
    
    const reason = message.content.split(" ").slice(1).join(" ");
    let name = `ticket-`+message.author.tag;
    name = name.replace('#', '');
    if (message.guild.channels.cache.find(c => c.name === name.toLowerCase())) {
      return message.reply(`You already have an application open.\nEither close that ticket, or ask for help in there.`);
    } else {
      let ticketChannel = await message.guild.channels.create('ticket-' + message.author.tag, {
        type: 'text', 
        permissionOverwrites: [
          {
            id: message.guild.id, 
            deny: ['VIEW_CHANNEL']
          },
          {  
            id: message.author.id, 
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
          },
          {
            id: supportRole.id, 
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
          }
        ]
      });
      ticketChannel.setParent('714282800156639384');
      message.reply(`✅ Your ticket has been created in <#${ticketChannel.id}>.`);
      if (!reason) {
        ticketChannel.send(`Thank you for opening a ticket, ${supportRole} will be with you shortly.\n\nReason: No reason provided.`);
      } else {
        ticketChannel.send(`Thank you for opening a ticket, ${supportRole} will be with you shortly.\n\nReason: ${reason}`)
      }
    }
  }
};

const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (client, message, args) =>{
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
   if(!wUser) return message.reply("I couldn't find that user in this guild.");
   let warnlevel = warns[wUser.id].warns;

  let embed = new Discord.MessageEmbed()
 .setTitle("**__Warnings__**")
 .setColor("BLACK")
 .setDescription(`${message.author.username}`)
 .addField("Number of Warns", `<@${wUser.id}> has ${warnlevel} warns.`)
 message.channel.send(embed) 
}

module.exports.help = {
  name: "warns"
}
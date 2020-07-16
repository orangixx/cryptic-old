const level = require("../../models/level");
const { Client, Message, MessageEmbed } = require("discord.js");
const { stripIdents } = require("common-tags");


module.exports = {
  name: "level",
  aliases: ['rank'],
  description: "Check someone's rank",
  usage: "level (@user)",
  category: "miscellaneous",
  run: async (client = new Client(), message = new Message(), args = new Array()) => {

    let user = message.mentions.members.first() || message.guild.members.cache.find(c => c.user.tag === args.join(" ")) || message.guild.members.cache.get(args[0]) || message.member;

    let levea = level.findOne({ guildID: message.guild.id, userID: user.user.id })

    let embed = new MessageEmbed()
    .setAuthor(`Level for ${user.user.tag}`)
    .setDescription(stripIdents`**Rank info for ${user.user.tag}
    
    **Level**: ${levea.level}
    **XP**: ${levea.xp}
    
    **Total XP**: ${levea.totalxp}
    
    XP needed for level ${levea.level + 1}: ${((levea.level * 100) + 75) - levea.xp}`)
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL())
    .setFooter(`Level | Cryptic`)
    message.channel.send(embed)

  }
}
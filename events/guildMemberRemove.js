const { Client, GuildMember, MessageEmbed } = require("discord.js");
const settings = require("../models/settings")

module.exports = async (client = new Client(), guild = new GuildMember()) => {
    
      settings.findOne({ guildID: message.guild.id }, async (err, res) => {
    
      if(!res || !res.leavemsg || !res.leave || !res.welcomechannel) return guild.systemChannel;
      // console.log(`${member} joined`)
    
      const embed = new MessageEmbed()
      .setAuthor(`Oh no {membername} left {guildname}`)
      .setDescription(res.leavemsg.replace("{member}", `${member}`).replace("{membername}", `${member.user.username}`).replace("{memberid}", `${member.user.id}`).replace("{guildname}", `${message.guild.name}`).replace("{guildid}", `${member.guild.id}`).replace("{membercount}", `${member.guild.memberCount}`).replace("{owner}", `<@${member.guild.owner.id}>`).replace("{ownername}", `${member.guild.owner.username}`).replace("{ownerid}", `${member.guild.owner.id}`))
      message.channel.send(embed)
      })
}

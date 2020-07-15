const { Client, Guild, MessageEmbed } = require("discord.js");
const settings = require(".././models/settings")

module.exports = async (client = new Client(), guild = new Guild()) => {
    
      settings.findOne({ guildID: message.guild.id }, async (err, res) => {
    
      if(!res || !res.leavemsg || !res.leave || !res.welcomechannel) return guild.systemChannel;
      // console.log(`${member} joined`)
    
      const embed = new MessageEmbed()
      .setAuthor(`Oh no {membername} left {guildname}`)
      .setDescription(res.leavemsg.replace("{member}", `${message.author}`).replace("{membername}", `${message.author.username}`).replace("{memberid}", `${message.author.id}`).replace("{guildname}", `${message.guild.name}`).replace("{guildid}", `${message.guild.id}`).replace("{membercount}", `${message.guild.memberCount}`).replace("{owner}", `<@${message.guild.owner.id}>`).replace("{ownername}", `${message.guild.owner.username}`).replace("{ownerid}", `${message.guild.owner.id}`))
      message.channel.send(embed)
      })
}

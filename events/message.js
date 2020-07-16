const { Client, MessageEmbed, Message } = require("discord.js")
const level = require("../models/level");
const settings = require("../models/settings");
module.exports = async (client = new Client(), message = new Message()) => {
  if (message.author.bot) return;

  const defSettings = require("../defSettings")(message.guild.id);
  
  /*let inviteLink = ["discord.gg", "discord.com/invite", "discordapp.com/invite"];
  
  if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
    await message.delete();
    return message.channel.send("What are you thinking? You are not allowed to self promote your server here.")
    .then(m => m.delete({ timeout: 10000 }))
  }*/

  settings.findOne({ guildID: message.guild.id }, async (err, res) => {
    if(!res) {
      const newdata = new settings(defSettings(message.guild.id));
      return newdata.save()
    }

    const prefix = res.prefix
  

  level.findOne({ userID: message.author.id, guildID: message.guild.id }, async (err, res) => {
    if(!res) {
      const newdata = new level({
        userID: message.author.id,
        guildID: message.guild.id,
        level: 0,
        xp: 0,
        totalxp: 0,
        time: Date.now()
      })

      newdata.save()
    } else {
      if (!message.content.startsWith(prefix)) {
        let guilds = ['264445053596991498']
        if(message.guild.id in guilds) return;
        const generate = Math.floor(Math.random() * 18);
        (await level.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { totalxp: res1.totalxp + generate, xp: res1.xp + generate })).save();

        if (res1.xp >= (res1.level * 100) + 75) {
            (await level.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { level: res1.level + 1, xp: 0 })).save().then(() => {
                message.channel.send(`\`Congratulations you are now level\` **${res.level + 1}**, ${message.author}`);
            });
        }
    }
  }
  })

  if(!message.content.startsWith(prefix)) return;
  
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const cmd = args.shift().toLowerCase();

    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!commandfile) return;
    commandfile.run(client, message, args);
})
};

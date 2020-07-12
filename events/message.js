const default_prefix = "c!";
const { Client, MessageEmbed, Message } = require("discord.js")
const level = require("../models/level");
const settings = require("../models/settings");
const defSettings = require("../defSettings");
module.exports = async (client = new Client(), message = new Message()) => {
  if (message.author.bot) return;

  /*let inviteLink = ["discord.gg", "discord.com/invite", "discordapp.com/invite"];
  
  if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
    await message.delete();
    return message.channel.send("What are you thinking? You are not allowed to self promote your server here.")
    .then(m => m.delete({ timeout: 10000 }))
  }*/

  settings.findOne({ guildID: message.guild.id }, async (err, res) => {
    if(!res) {
      const newdata = new settings(defSettings);
      return newdata.save()
    }
  })

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

  if(!message.content.startsWith(default_prefix)) return;
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(default_prefix.length));
    if (!commandfile) return;
    commandfile.run(client, message, args);
};

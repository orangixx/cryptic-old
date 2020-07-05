/*const Discord = require("discord.js");
const config = require("../config.json");
let xp = require("../xp.json")

module.exports.run = async (client, message, args) => {
  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 1000;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(
      `${difference} XP til next Level Up!`,
      message.author.displayAvatarURL
    );

  message.channel.send(lvlEmbed);
};

module.exports.help = {
  name: "level"
};*/
const Discord = require("discord.js");
const immune = ["405497010385321995"];

module.exports.run = async (client, message, args) => {
  var fs = require("fs");

  var user2 = message.mentions.members.last();
  if (!user2) {
    message.reply("Mention a user to kill!");
    return;
  }
    let killed = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!killed) {
      let emb = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `${message.author} decied to kill themself 💔 REST IN PEACE`
        );

      message.channel.send(emb);
    } else {
      if (immune.includes(killed.id)) {
        let emb = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setDescription(
            `${message.author} could not handle ${killed}'s Greatness and Died! 💔 REST IN PEACE`
          );

        message.channel.send(emb);
      } else {
        let emb = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setDescription(
            `${killed} was killed by ${message.author} 💔 REST IN PEACE` 
          )
          .setImage("https://images.app.goo.gl/NrbgKwx9Ra4Vz1CA9");
        message.channel.send(emb);
      }
    }
};

module.exports = {
  name: "kill",
  category: "fun"
}
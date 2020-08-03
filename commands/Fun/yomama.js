const Discord = require("discord.js");
const fetch = require("snekfetch");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");
    fetch.get("https://api.apithis.net/yomama.php").then(joke => {
      const yomama = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(joke.body);
      message.channel.send({ embed: yomama });
    });
};

module.exports = {
  name: "yomama",
  category: "fun",
  description: "Yo mama jokes"
}
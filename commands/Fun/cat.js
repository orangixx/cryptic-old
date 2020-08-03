const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  let { body } = await superagent.get(`http://aws.random.cat/meow`);
    let catembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("BLUE")
      .setTimestamp()
      .setImage(body.file);

    message.channel.send(catembed);
};

module.exports = {
  name: "cat",
  aliases: ["kitten"],
  category: "fun"
}
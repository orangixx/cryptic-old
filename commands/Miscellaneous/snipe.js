const Discord = require("discord.js");
module.exports = {
  name: "snipe",
  category: "miscellaneous",
  description: "Snipe a message",
  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send("There are no deleted messages");
    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.author)
      .setDescription(msg.content);
    if (msg.image) embed.setImage(msg.image);
    message.channel.send(embed);
  }
};

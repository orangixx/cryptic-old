const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "coinflip",
  category: "Fun",
  Description: "CoinFlip",
  run: async (client, message, args) => {
    function coin() {
      var flip = [`Heads`, `Tails`];
      return flip[Math.floor(Math.random() * flip.length)];
    }
    var coinEmbed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("BLUE")
      .addField("You flipped a ", coin());
    message.channel.send({ embed: coinEmbed });
  }
};

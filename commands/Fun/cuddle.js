const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.action === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    if (!args[0]) return message.reply("Mention someone to cuddle with!");

    var subreddits = [
      "https://media.giphy.com/media/lS7F5S4XErqr17GG8Z/giphy.gif",
      "https://media.giphy.com/media/TKjEehX78GpNK/giphy.gif",
      "https://media.giphy.com/media/3o6MbfLfh5TpxXTila/giphy.gif",
      "https://media.giphy.com/media/rzNkDOS4TlQqs/giphy.gif",
      "https://media.giphy.com/media/qei7zeYhBu3zW/giphy.gif",
      "https://media.giphy.com/media/L2ruRRJdZskkH05h0H/giphy.gif",
      "https://media.giphy.com/media/sbRScvgcR7l6w/giphy.gif",
      "https://media.giphy.com/media/S2XiEJb2a1HYQ/giphy.gif",
      "https://media.giphy.com/media/6kGhDWF4vwTLi/giphy.gif",
      "https://media.giphy.com/media/11Z6hNIc77pfRC/giphy.gif"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to kiss.`);
    }
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`${message.author} cuddles **${user}**`)
      .setTimestamp()
      .setImage(sub);
    message.channel.send({
      embed
    });
  }
};

module.exports = {
  name: "cuddle",
  category: "fun"
}
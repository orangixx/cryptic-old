const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "shorturl",
  category: "info",
  description: "Shortens a URL",
  run: async (client, message, args) => {
    let url = args[0];
    if (!url) {
      return message.channel.send("**Usage:** ``c!shorturl [URL]``");
    }

    let res = await fetch(
      `https://is.gd/create.php?format=simple&url=${encodeURI(url)}`
    );
    let body = await res.text();

    if (body === "Error: Please enter a valid URL to shorten") {
      return message.channel.send("Invalid URL");
    }

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .setDescription(body);

    message.channel.send(embed);
  }
};

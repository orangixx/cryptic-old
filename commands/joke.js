const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "joke",
  category: "Fun",
  description: "Tells A Joke.",
  run: async (client, message, args) => {
    const r = Math.floor(Math.random() * 50);
    if (r == 49 || args[0] === "honest") {
      const r2 = Math.floor(Math.random() * 2);

      if (r2 == 1) {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(client.users.get("318922957760102409").username)
          .setImage(client.users.get("318922957760102409").displayAvatarURL);
        return message.channel.send(embed);
      } else {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(client.users.get("200558916365582337").username)
          .setImage(client.users.get("200558916365582337").displayAvatarURL);
        return message.channel.send(embed);
      }
    } else {
      const l = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      let le = await l.json();
      le = await JSON.stringify(le);
      le = await JSON.parse(le);
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .addField(le.setup, le.punchline);
      message.channel.send(embed);
    }
  }
};
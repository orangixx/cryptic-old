const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  category: "Info",
  Description: "Show Uptime Of The Bot",
  run: async (client, message, args) => {
    function duration(ms) {
      const secs = Math.floor((ms / 1000) % 60).toString();
      const mins = Math.floor((ms / (1000 * 60)) % 60).toString();
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
      return `${days.padStart(1, "0")} days, ${hrs.padStart(
        2,
        "0"
      )} hours, ${mins.padStart(2, "0")} minutes, ${secs.padStart(
        2,
        "0"
      )} seconds`;
    }

    var uptimeEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Uptime")
      .addField("Cryptic has been online for:", duration(client.uptime))
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send({ embed: uptimeEmbed });
  }
};

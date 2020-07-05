var cpuStat = require("cpu-stat");
var os = require("os");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stats",
  category: "Info",
  description: "Proives info about the bot",
  usage: "!stats",
  run: async (client, message, args) => {
    cpuStat.usagePercent(
      {
        coreIndex: 0,
        sampleMs: 100
      },
      function(err, percent, seconds) {
        if (err) {
          return console.log(err);
        }

        let cpu = os.cpus().map(c => c.model)[0];

        let osType = os.type();
        let osVersion = os.release();
        let osArch = os.arch();
        let osCss =
          "```\n" +
          "• Operating System: " +
          osType +
          osVersion +
          "\n• CPU Model: " +
          cpu +
          "\n• CPU Architecture: " +
          osArch +
          "\n```";

        let cpuUsage = `${Math.round(percent)}%`;
        let memoryUsage = `${Math.round(
          process.memoryUsage().heapUsed / 1024 / 1024
        )}MB`;
        let usageCSS =
          "```css\n" +
          "• CPU Usage: " +
          cpuUsage +
          "\n• MemoryUsage: " +
          memoryUsage +
          "\n```";
        const embed = new MessageEmbed()
          .setAuthor(
            `${client.user.username}'s Statistics`,
            client.user.displayAvatarURL()
          )
          .addField("Usage Info", usageCSS)
          .addField("Hosting Information", osCss)
          .setColor("RANDOM")
          .setTimestamp();

        message.channel.send(embed);
      }
    );
  }
};
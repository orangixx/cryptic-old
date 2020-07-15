const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ram",
  category: "bot",
  Description: "Show RAM usage of the bot",
  run: async (client, message, args) => {
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

    var ramEmbed = new MessageEmbed()
      //.setColor("RANDOM")
      .setTitle("RAM Usage")
      .addField(`Cryptic is currently using ${Math.round(used * 100) / 100} MB of RAM`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send({ embed: ramEmbed });
  }
};
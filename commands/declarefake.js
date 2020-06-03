module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "405497010385321995") return;
  message.channel.bulkDelete(5);
  message.delete();
  message.channel.send(`@everyone **WARNING**: This server has been declared as fake by the developers of <@!612134650114080818>. The bot will be leaving this server shortly. If you think this is a mistake, let us know in our [Support Server](https://discord.gg/tpGHaGg)`);
  setTimeout(async () => {
    message.guild.leave();
  }, 10000);
}

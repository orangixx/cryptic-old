const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Info",
  description: "Returns Latency And API Ping",
  run: async (client, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging...`);

    let messageLatency = `${Math.floor(msg.createdAt - message.createdAt)}ms`;
    let apiLatency = `${Math.round(client.ws.ping)}ms`;
    let messageLatencyMD =
      "```\n" + "• Message Latency: " + messageLatency + "\n```";
    let apiLatencyMD = "\n```\n" + "• API Latency: " + apiLatency + "\n```";
    const embed = new MessageEmbed()
      .setAuthor(
        `${client.user.username}'s Ping`,
        client.user.displayAvatarURL()
      )
      .setDescription(messageLatencyMD + apiLatencyMD)
      .setColor("RANDOM")
      .setTimestamp();

    message.channel.send(embed);
    msg.delete();
  }
};
module.exports = {
  name: "call",
  description: "Start a call",
  category: "fun",
  run: async (client, message, args) => {
    if (client.globalChat.guilds.get(message.guild.id))
      return message.channel.send(
        `There is aleady a call going on in this guild! Join the party over at <#${client.globalChat.channels.get(
          message.guild.id
        )}>`
      );
    client.globalChat.guilds.set(message.guild.id, true);
    client.globalChat.calls.set(message.guild.id, false);
    client.globalChat.channels.set(message.guild.id, message.channel.id);
    client.guilds.cache.map((g) => {
      try {
        let channel = g.channels.cache.find((g) => g.name === "│phone").id;
        if (g.id == message.guild.id);
        else {
          client.channels.cache
            .get(channel)
            .send(
              `${message.guild.name} wants to call! Run c!accept ${message.guild.id} to call them!`
            );
        }
      } catch {}
    });
    message.react("✅");
  },
};
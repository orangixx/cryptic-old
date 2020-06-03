module.exports = {
  name: "end",
  description: "End a call",
  category: "globalchat",
  run: async (client, message, args) => {
    try {
      if (!client.globalChat.collectors.get(message.guild.id))
        return message.channel.send(
          `There is no conversation active in this guild!`
        );
      let OtherGuild = client.globalChat.guildsSaved.get(message.guild.id);
      if (!client.globalChat.collectors.get(OtherGuild))
        return message.channel.send(
          `There is no active conversation in the guild you mentioned in the args!`
        );
      client.globalChat.collectors.get(message.guild.id).stop("end");
      client.globalChat.collectors.get(OtherGuild).stop("end");
      message.channel.send(`This conversation is ended!`);
      client.channels.cache
        .get(client.globalChat.channels.get(OtherGuild))
        .send(`This conversation is ended!`);
      client.globalchat.calls.delete(message.guild.id);
      client.globalChat.calls.delete(OtherGuild);
      client.globalChat.channels.delete(message.guild.id);
      client.globalChat.channels.delete(OtherGuild);
      client.globalChat.collectors.delete(message.guild.id);
      client.globalChat.collectors.delete(OtherGuild);
      client.globalChat.guilds.delete(OtherGuild);
      client.globalChat.guild.delete(message.guild.id);
      client.globalChat.guildsSaved.delete(message.guild.id);
      client.globalChat.guildsSaved.delete(OtherGuild);
    } catch {}
  },
};
module.exports = {
  name: "np",
  category: "music",
  description: "send the name of on going song",
  async run (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("You need to be in a Voice channel for me to show you the current song that is being played!");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There currently no songs being played!");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}
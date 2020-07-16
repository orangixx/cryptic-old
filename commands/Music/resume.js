module.exports = {
  name: "resume",
  category: "music", 
  description: "Resume the paused Song",
  async run (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("You need to join a Voice channel!");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  
  return message.channel.send("✅ | Resumed the Paused Song") 
 }
    
    message.channel.send("There is nothing paused that i can resume")
    
  }
}
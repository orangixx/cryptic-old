const prefix = "c!";
module.exports = async (client, message) => {
  if (message.author.bot) return;

  /*let inviteLink = ["discord.gg", "discord.com/invite", "discordapp.com/invite"];
  
  if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
    await message.delete();
    return message.channel.send("What are you thinking? You are not allowed to self promote your server here.")
    .then(m => m.delete({ timeout: 10000 }))
  }*/
  
  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // let commandfile = client.commands.get(cmd.slice(prefix.length));
    // if (!commandfile) return;
    // commandfile.run(client, message, args);
  }
};
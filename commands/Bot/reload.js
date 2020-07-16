const Discord = require("discord.js");

exports.run = async (client, message) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else { 
    let allowed = ["405497010385321995", "259208178657394699"];
                  //Roman, Jesse

    if (!allowed.includes(message.author.id))
      return message.channel.send("You cannot use this command.");

    const reload = new Discord.MessageEmbed()
      .setAuthor("Reloading the bot...")
      .setColor("RED")
      .setTimestamp();
    await message.channel.send(reload);

    const reloaded = new Discord.MessageEmbed()
      .setAuthor("Reloaded!")
      .setDescription("The bot will ignore commands for 1-3 seconds.")
      .setColor("BLUE")
      .setTimestamp();
    await message.channel.send(reloaded);
    message.delete(reload);
    process.exit(1);
  }
};

module.exports = {
  name: "reload",
  category: "bot",
  description: "Reloads the bot"
}

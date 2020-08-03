const Discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "bot",
  run: async (client, message, args) => {
  var fs = require("fs");
    let owner = client.users.cache.get("405497010385321995");
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.MessageEmbed()
      .setAuthor("Bot Information")
      .setColor("BLUE")
      .setThumbnail(bicon)
      .addField("Bot Creator", `**${owner.tag}**`)
      .addField("Bot Name", client.user.username)
      .addField("Created On", client.user.createdAt)
      .addField("Bot Language:", " JavaScript")
      .addField("Bot Library:", "discord.js")
      .setTimestamp();

    message.channel.send(botembed);
  }
}
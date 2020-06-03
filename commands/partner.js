const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.user.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Partner Info")
    .setDescription(
      "Partner message goes here!"
    )
    .setColor("RANDOM");
  message.channel.send(embed);
};

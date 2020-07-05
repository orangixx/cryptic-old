const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.users.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptic's Fun Commands")
    .setDescription(
      "`8ball\ncalculate\ncoinflip\ndadjoke\ndice\nfortune\nhowgay\njoke\nmeme\nmegusta\nrps\nsteam\ntaylorswift\ntrump\nyomama`"
    )
    .setFooter(
      "Use c! before each command!, For support, join: https://discord.gg/5wbQMxA"
    )
    .setColor("RANDOM")
    .setThumbnail(boticon);
  message.channel.send(embed);
};
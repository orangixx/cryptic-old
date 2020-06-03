const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.user.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptic's Music Commands")
    .setDescription("`loop\nnp\npause\nplay\nqueue\nresume\nskip\nstop`")
    .setFooter(
      "Use c! before each command! For support, join: https://discord.gg/5wbQMxA"
    )
    .setColor("RANDOM")
    .setThumbnail(boticon);
  message.channel.send(embed);
};

const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {};

module.exports.run = async (bot, message, args, prefix) => {
  let allowed = ["405497010385321995"];

  if (!allowed.includes(message.author.id)) return message.channel.send();

  let embed = new Discord.MessageEmbed()

    .setTitle("Team Roman's Staff Application")
    .setDescription(
      "If you have any question about the staff applications or anything else please DM <@405497010385321995>"
    )
    .addField(
      "Google Forms Link",
      `[Click here](https://forms.gle/iU9rEo5FZGTcCeja9)`
    )
    .addField("Applications Status", "Status: ``OPEN``")
    .addField(
      "Please be patient",
      "It takes a while for us to read the applications, so please be patient while we review your application. You will receive your results in 24 hours!"
    )
    .setColor("RANDOM")
    .setImage(
      "https://cdn.discordapp.com/attachments/652145587088523265/670691364488478751/giphy_2.gif"
    )
    .setTimestamp()
    .setFooter("Staff Applications Information 4/15/20");

  message.delete();
  return message.channel.send(embed);
};

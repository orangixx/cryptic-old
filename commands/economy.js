const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.user.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptic's Economy Commands")
    .setDescription("`balance\ndaily\npay\nmonthly\nweekly\nwork`")
    /*.setDescription(
      "Economy commands are not available right now, we will update you in our support server when they are avaliable! [support server](https://discord.gg/5wbQMxA)"
    )
    /* .addField("candy", "Give yourself or someone some candy")
      .addField("hug", "Hug someone")
      .addField("kiss", "Kiss someone")
      .addField("punch", "Punch someone")
      .addField("kill", "Kill someone")*/
    .setFooter(
      "Use c! before each command! For support, join: https://discord.gg/5wbQMxA"
    )
    .setColor("RANDOM")
    .setThumbnail(boticon);
  message.channel.send(embed);
};
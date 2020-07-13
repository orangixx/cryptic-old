const discord = require("discord.js");

module.exports = {
  name: "action",
  category: "fun",
  run: async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.user.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptic's Action Commands")
    .setDescription("`candy\ncuddle\nhug\nkill\nkiss\npunch`")
    /*.addField("candy", "Give yourself or someone some candy")
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
}
}
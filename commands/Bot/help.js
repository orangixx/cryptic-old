const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.users.cache.displayAvatarURL;
  let embed = new Discord.MessageEmbed()
    .setTitle("Cryptic's Bot Commands")
    .setDescription(
      `If you are having any trouble, please join our support server and contact the bot creator **${owner.tag}**.`
    )
    .addField(
      "Have any questions? Join the support server!",
      `__[Support Server](https://discord.gg/5wbQMxA)__`
    )

    //.addField(":pencil: Newest Commands", "``c!newcmds``")
    .addField(":joy: Fun Commands", "``c!fun``")
    .addField(":busts_in_silhouette: Action Commands", "``c!action``")
    .addField(":ok: Text Commands", "``c!text``")
    .addField(":pushpin: Utility Commands", "``c!utility``")
    //.addField(":moneybag: Economy Commands", "``c!economy``")
    .addField(":musical_note: Music Commands", "``c!music``")
    .addField(":dog: Animal Commands", "``c!animal``")
    .addField(":smirk: NSFW Commands", "``c!nsfw``")
    .addField(":hammer: Moderation Commands", "``c!moderation``")
    .setThumbnail(boticon)
    .setColor("RANDOM");
  //message.delete();
  return message.channel.send(embed);
};

module.exports = {
  category: "miscellaneous"
}
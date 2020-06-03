const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    const notnsfw = new discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    let owner = client.users.cache.get("405497010385321995");
    let owner2 = client.users.cache.get("419973730102673415");
    let boticon = client.user.displayAvatarURL;
    if (message.channel.nsfw === true) {
      let embed = new discord.MessageEmbed()
        .setTitle("Cryptic's NSFW Commands")
        .setDescription(
          "`fuck\n4k\nass\nhentai\npussy\nblack\nblowjob\ncumsluts\ngif`"
        )
        .setFooter(
          "Use c! before each command! For support, join: https://discord.gg/5wbQMxA"
        )
        .setColor("BLUE")
        .setThumbnail(boticon);
      message.channel.send(embed);
    } else {
      message.channel.send(notnsfw);
    }
  }
};

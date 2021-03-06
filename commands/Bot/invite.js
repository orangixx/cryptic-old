const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let boticon = client.user.displayAvatarURL;
    let embed = new discord.MessageEmbed()
      .setAuthor("Cryptic Invites", message.guild.iconURL)
      .addField(
        "Add the bot to your server",
        `[Click here](https://discordapp.com/api/oauth2/authorize?client_id=612134650114080818&permissions=8&scope=bot)`
      )
      .addField("Join our server", `[Click here](https://discord.gg/NdHKxmV)`)
      .setColor("BLUE")
      .setTimestamp()
      .setThumbnail(boticon);
    message.channel.send(embed);
};

module.exports = {
  name: "invite",
  category: "bot"
}

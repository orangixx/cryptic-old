const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "spotify",
  category: "Info",
  description: "Shows the track information of a user.",
  run: async (client, message, args) => {
    let targetUser = message.mentions.users.first() || message.author;

    const findArray = targetUser.presence.activities;
    const found = findArray.find(activity => activity.name === "Spotify");

    if (!found)
      return message.channel.send("**The user isn't listening to Spotify!**");

    if (found.name === "Spotify") {
      let trackImage = `https://i.scdn.co/image/${found.assets.largeImage.slice(
        8
      )}`;
      let trackURL = `https://open.spotify.com/track/${found.syncID}`;
      let trackName = found.details;
      let trackAuthor = found.state;
      let trackAlbum = found.assets.largeText;

      const embed = new MessageEmbed()
        .setAuthor(
          "Spotify Track Information",
          `https://cdn.discordapp.com/emojis/408668371039682560.png`
        )
        .setColor("GREEN")
        .setThumbnail(trackImage)
        .addField("🎵 **Song Name: **", "`" + trackName + "`", false)
        .addField("📀 **Album: **", "`" + trackAlbum + "`", false)
        .addField("🎤 **Author(s): **", "`" + trackAuthor + "`", false)
        .addField("Listen To Track: ", `${trackURL}`, false);

      message.channel.send(embed);
    }
  }
};

exports.run = async (client, message, args, level) => {
  var fs = require("fs");
    try {
      let notAnimated = [];
      let animated = [];

      message.guild.emojis.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString());
        else notAnimated.push(emoji.toString());
      });

      if (!animated[0]) animated = ["None"];
      if (!notAnimated[0]) notAnimated = ["None"];

      message.channel.send(
        "Animated:\n" +
          animated.join(" ") +
          "\n\nNot Animated:\n" +
          notAnimated.join(" ")
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
  }

  module.exports = {
    enabled: true,
    aliases: ["emoji"],
    guildOnly: true,
    permLevel: "User"
  };

  module.exports = {
    name: "emojis",
    category: "miscellaneous",
    description: "Displays all of the emojis in the server.",
    usage: "emojis"
  };
};
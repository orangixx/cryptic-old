exports.run = async (client, message, args, level) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.other === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
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
  }

  exports.conf = {
    enabled: true,
    aliases: ["emoji"],
    guildOnly: true,
    permLevel: "User"
  };

  exports.help = {
    name: "emojis",
    category: "Utility",
    description: "Displays all of the emojis in the server.",
    usage: "emojis"
  };
};
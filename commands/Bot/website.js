const discord = require("discord.js");

exports.run = async (client, message, args) => {
  var fs = require("fs");

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
    let boticon = client.user.displayAvatarURL;
    let embed = new discord.MessageEmbed()
      .setAuthor("Website", message.guild.iconURL)
      .addField(
        "Website is Down...",
        //"Visit Cryptics Website Here:",
        `[Cryptic's Website](https://roman-cryptic-dashboard.glitch.me/down)`
      )
      .setColor("BLUE")
      .setTimestamp()
      .setThumbnail(boticon);
    message.channel.send(embed);
  }
};

module.exports = {
  name: "website",
  category: "bot",
  description: "Website."
}
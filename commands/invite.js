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
      .setAuthor("Cryptic Invites", message.guild.iconURL)
      .addField(
        "Add the bot to your server",
        `[Click here!](https://discordapp.com/api/oauth2/authorize?client_id=612134650114080818&permissions=8&scope=bot)`
      )
      .addField("Join our server", `[Click here!](https://discord.gg/5wbQMxA)`)
      .setColor("BLUE")
      .setTimestamp()
      .setThumbnail(boticon);
    message.channel.send(embed);
  }
};

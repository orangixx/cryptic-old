const Discord = require("discord.js");
const fetch = require("snekfetch");

module.exports.run = async (bot, msg, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.fun === "0") {
      msg.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    fetch.get("https://api.apithis.net/yomama.php").then(joke => {
      const yomama = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(joke.body);
      msg.channel.send({ embed: yomama });
    });
  }
};

const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.animal === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    let imgs = Math.floor(Math.random() * 80);
    let url = [
      "https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100"
    ];
    request(
      {
        method: "GET",
        uri: url[Math.floor(Math.random() * url.length)]
      },
      function(err, response, data) {
        if (err) {
          console.log(err, null);
          return;
        }

        data = JSON.parse(data);
        var mainObj = data.data.children;
        var urls = {};

        for (let i = 0; i < mainObj.length; i++) {
          let url = mainObj[i].data.url;
          urls[i + 1] = url;
        }
        const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setColor("BLUE")
          .setImage(urls[imgs])
          .setTimestamp();
        message.channel.send({ embed });

        if (client.user && message.content === "undefined") {
          message.delete();
        }
      }
    );
  }
};

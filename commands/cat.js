const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  let { body } = await superagent.get(`http://aws.random.cat/meow`);
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.i === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    let catembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("BLUE")
      .setTimestamp()
      .setImage(body.file);

    message.channel.send(catembed);
  }
};
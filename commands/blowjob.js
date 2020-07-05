const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.nsfw === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    /*if (!args[0]) return message.reply("Mention someone to fuck!");*/

    const notnsfw = new Discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    var subreddits = [
      "https://images-ext-2.discordapp.net/external/SfGR9d77mOANOeXURXZoIiq1yG1hOOrVIIO1HVl9mYs/https/cdn.boob.bot/blowjob/4ADD.gif?width=360&height=256",
      "https://images-ext-1.discordapp.net/external/gUfEgAKfaM8-U_fryExxEDTbbG2lmQuhLmcPOj_QIME/https/cdn.boob.bot/blowjob/5B8B.jpg?width=360&height=265",
      "https://images-ext-1.discordapp.net/external/bxWnssek0Rjo-X4Ab6u6ozrLBFaFWOv1Y7vWVmWV454/https/cdn.boob.bot/blowjob/5127.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/5rmnJPPZcesCOGIXKjP2Lado-ylsqZHCIJDxB0OhHnY/https/cdn.boob.bot/blowjob/48F3.gif?width=360&height=202",
      "https://images-ext-1.discordapp.net/external/_9tlO2tPcVpYEHw9It5rudWqifMRoUyX53pGirGuVVQ/https/cdn.boob.bot/blowjob/4C5E.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/Rc27HR4WzCJ8balaHTw-6Ev9EuCn8ACzfsX9VDHQwjg/https/cdn.boob.bot/blowjob/65EF.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/j4GTCgaBVnGkgSwI328Wfesgs4GyzoaqxTPcsXzK0wg/https/cdn.boob.bot/blowjob/4EB1.jpg?width=130&height=130",
      "https://images-ext-2.discordapp.net/external/hSpdYoX7PT7gE1KgTfv5PBGdmWSGZ6zk5liZzb4Y0Fk/https/cdn.boob.bot/blowjob/4D0D.jpg?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/rdMz7n1im7taLA9P-loLu1kCFCR2NYicRQkp_5kfEzA/https/cdn.boob.bot/blowjob/67D9.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/wRwqxQK09SWDUk9GIMkp8y6W2yXIcE95dbq_jIedBMo/https/cdn.boob.bot/blowjob/465A.gif?width=278&height=270"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    /*var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to fuck.`);
    }*/

    if (message.channel.nsfw === true) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        /*.setDescription(
          `:point_right::ok_hand: ${message.author} fucked **${user}**`
        )*/
        .setImage(sub);

      message.channel.send(embed);
    } else {
      message.channel.send(notnsfw);
    }
  }
};
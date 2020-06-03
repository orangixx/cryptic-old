const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
      "https://imgur.com/CoPsQzv",
      "https://giant.gfycat.com/ThreadbareFelineHoki.gif",
      "https://78.media.tumblr.com/4781ef908187ea50f5534839d90f1858/tumblr_nzgzd9lKA81tsji94o1_500.gif",
      "https://78.media.tumblr.com/53018f4818838ca0d1c39e50bee0eea4/tumblr_o21gocQ6GE1rkdhugo1_500.gif",
      "https://78.media.tumblr.com/4d43763acc380927f51152d176050fb2/tumblr_nz7c4nWUSy1sf1opfo1_500.gif",
      "https://78.media.tumblr.com/a6db48ccd157d4f83456cf577cfc7438/tumblr_nz97hjzU8q1u9j6sno1_500.gif",
      "https://78.media.tumblr.com/tumblr_lpocpdSxAh1ql4hl8o1_500.gif",
      "https://78.media.tumblr.com/7549557e80b9a3a14176266944a6facc/tumblr_ntl46dr3iB1tjgan8o1_500.gif",
      "https://78.media.tumblr.com/96647052018295735d042bc330be566d/tumblr_otpgt1uvLr1wu94sqo1_500.gif",
      "https://78.media.tumblr.com/0ea77815c777f3e96895eb9dda93ae97/tumblr_nz97ilSyNi1u9j6sno1_500.gif"
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

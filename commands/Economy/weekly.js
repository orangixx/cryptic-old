const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    let timeout = 604800000; // 7 days in milliseconds, change if you'd like.
    let amount = 5000;
    // random amount: Math.floor(Math.random() * 1000) + 1;

    let weekly = await db.fetch(`weekly_${message.author.id}`);
    var fs = require("fs");

    fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
      var c = JSON.parse(contents);
      if (c.economy === "0") {
        message.channel.send("Error: Command disabled");
      } else {
        cc();
      }
    });
    function cc() {
      if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        const cooldown = new Discord.MessageEmbed()
          .setTitle("Weekly Cooldown")
          .setDescription(
            `You already collected your weekly reward, you can come back and collect it in **${time.days}days ${time.hours}hours ${time.minutes}minutes ${time.seconds}seconds**!`
          )
          .setColor("RED")
          .setTimestamp();

        message.channel.send(cooldown);
      } else {
        let embed = new Discord.MessageEmbed()
          .setAuthor(
            `${message.author.tag}'s Weekly Reward`,
            message.author.displayAvatarURL
          )
          .setColor("GREEN")
          .setDescription(`**Weekly Reward**`)
          .addField(`Collected :credit_card: `, amount);

        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        db.set(`weekly_${message.author.id}`, Date.now());
      }
    }
  }
};

module.exports = {
  name: "weekly",
  category: "economy",
  description: "Weekly money for y'all"
}
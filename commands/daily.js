const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  let timeout = 86400000; // 24 hours in milliseconds, change if you'd like.
  let amount = 2000;
  // random amount: Math.floor(Math.random() * 1000) + 1;

  let daily = await db.fetch(`daily_${message.author.id}`);
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.economy === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      const cooldown = new Discord.MessageEmbed()
        .setTitle("Daily Cooldown")
        .setDescription(
          `You already collected your daily reward, you can come back and collect it in **${time.hours}hours ${time.minutes}minutes ${time.seconds}seconds**!`
        )
        .setColor("RED")
        .setTimestamp();
      message.channel.send(cooldown);
    } else {
      let embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.tag}'s Daily Reward`,
          message.author.displayAvatarURL
        )
        .setColor("GREEN")
        .addField(`Collected :credit_card:`, amount);

      message.channel.send(embed);
      db.add(`money_${message.author.id}`, amount);
      db.set(`daily_${message.author.id}`, Date.now());
    }
  }
};

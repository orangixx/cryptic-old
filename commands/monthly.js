const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  let timeout = 2592000000; // 1 month in milliseconds, change if you'd like.
  let amount = 10000;
  // random amount: Math.floor(Math.random() * 1000) + 1;

  let monthly = await db.fetch(`monthly_${message.author.id}`);
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
    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
      let time = ms(timeout - (Date.now() - monthly));

      const cooldown = new Discord.MessageEmbed()
        .setTitle("Monthly Cooldown")
        .setDescription(
          `You already collected your monthly reward, you can come back and collect it in **${time.days}days ${time.hours}hours ${time.minutes}minutes ${time.seconds}seconds**!`
        )
        .setColor("RED")
        .setTimestamp();
      message.channel.send(cooldown);
    } else {
      let embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.tag}'s Monthly Reward`,
          message.author.displayAvatarURL
        )
        .setColor("GREEN")
        .setDescription(`**Monthly Reward**`)
        .addField(`Collected :credit_card:`, amount);

      message.channel.send(embed);
      db.add(`money_${message.author.id}`, amount);
      db.set(`monthly_${message.author.id}`, Date.now());
    }
  }
};

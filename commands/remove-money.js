const db = require("quick.db");
const discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  /*if (!message.member.hasPermission("MANAGE_GUILD")) {
    // if message.author / member does not have the permission MANAGE_GUILD, return.
    return message.channel
      .send("You're missing the permission `MANAGE_GUILD` to use this command.")
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 300000); // delete after 5min.
      });*/
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    let allowed = ["405497010385321995"];

    if (!allowed.includes(message.author.id))
      return message.channel.send(
        "You need to be the owner of this bot to use this command."
      );
  }

  let user = message.mentions.members.first() || message.author; // if args[0] (first input) is not a number, return.

  /*if (isNaN(args[0]))
    return message.channel.send(
      `${message.author}, you need to input a valid number to remove.`
    );*/ db.subtract(
    `money_${user.id}`,
    args[0]
  );
  let bal = await db.fetch(`money_${user.id}`);

  let embed = new discord.MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("RED")
    .setTimestamp();

  message.channel.send(embed);
};

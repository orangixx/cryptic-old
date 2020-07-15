const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (args[0] == "help") {
    message.reply("Usage: c!report <user> <reason>");
    return;
  }
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[1])
  );
  if(!rUser) return message.channel.send("**Usage:** `c!report <@user> <reason>`.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
    .addField("Reported In:", message.channel)
    .addField("Reported At:", message.createdAt)
    .addField("Reason:", reason);

  let reportschannel = message.guild.channels.cache.find(element => element.name === "reported-users");
  if (!reportschannel)
    return message.channel.send("Couldn't find a **│reported-users** channel.");

  message.reply("I have successfully reported that user to the staff team!");
  message.delete().catch(O_o => {});
  reportschannel.send(reportEmbed);
};

module.exports = {
  name: "report",
  category: "moderation"
};

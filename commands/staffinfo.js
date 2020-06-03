const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {};

module.exports.run = async (bot, message, args, prefix) => {
  let allowed = ["405497010385321995"];

  if (!allowed.includes(message.author.id))
    return message.channel.send(
      "This command is not allowed for server members. **Do you want to be able to use this command in your server? Put your suggestions in our Suggestions channel channel.** (Avaliable in our `__[Support Server](https://discord.gg/5wbQMxA)__`)"
    );

  let embed = new Discord.MessageEmbed()
    .setTitle("Cryptic's Staff Team Information")
    .setDescription(
      "In this channel you will find all the information about being staff. You will find information about promotions, roles, etc."
    )
    .addField(
      "Staff Discussions",
      "All staff related discussions must be discussed in the staff category not in public chats. Everything in staff channels must be kept in staff channels."
    )
    .addField(
      "Punishments",
      "When giving a punishment to a member of the server you must provide the warning with a valid reason at all times."
    )
    .addField(
      "Staff Message Requirement",
      "All of the staff is required to reach 400 message a week. Failure to do so in a week or two will result in a demotion."
    )
    //    .addField("Staff of the Week", "To be the Staff Of The Week you have to be the most active staff member. If you are choosed, you will have the Staff Of The Week role and a near promotion with a 500 bonus XP.")
    .addField(
      "Moderation Information",
      "We use <@159985870458322944> as a moderation bot, the bot's prefix is ``!``. If we updated the prefix or permissions we will annonunce it in <#694755264817004622>. Type ``!help`` in <#694755263172837447> to learn more about it."
    )
    .addField(
      "Auto-Moderation Information",
      "We are currently using more than two bots to work on the Auto-Moderation, the bots won't take actions against spammers."
    )
    .addField(
      "Staff Warnings Information",
      "We strike staff members when they break any of the rules. We kick the staff out of the team at **3 strikes**."
    )
    .addField(
      "Promotions Information",
      "We promote a staff member when we feel like they are ready to have more permissions and be higher ranked. Keep in mind that if you ask for a promotion you'll be given a warning."
    )
    .addField(
      "Permissions Information 4/15/20",
      "Permissions are displayed in the image below this message"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/640540852200144906/672495155382714368/unknown.png"
    )
    .setColor("BLUE")
    .setTimestamp();
  message.delete();
  return message.channel.send(embed);
};

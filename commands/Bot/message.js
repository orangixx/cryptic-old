const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    let Invite = message.guild.channels.cache.first().createInvite();
    let Owner = message.author;
    if (Owner.id !== "405497010385321995")
      return message.reply("Only the bot owners can use this command!");

    const id = args.shift();
    const sayMessage = args.join(" ");
    if (!sayMessage)
      return message.reply("Usage `c!message  <UserID>  <messageHere>`");

    let contact = new Discord.MessageEmbed()
      .setAuthor(Owner.username)
      .setColor("RANDOM")
      .setThumbnail(Owner.displayAvatarURL)
      .setTitle("Response from Cryptic!")
      .addField("Response:", sayMessage)
      .addField(
        "Support Server",
        "[Cryptic Support](https://discord.gg/5wbQMxA)"
      )
      .setTimestamp();

    bot.users.cache.get(id).send(contact);

    let chanemb = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {
      message.delete({
        timeout: 5000,
        reason: "Slow down, You are typing this command too fast!"
      });
    });

    message.delete();
  }
};

module.exports = {
  name: "message",
  aliases: ['msg'],
  category: "bot",
  description: "Get a message from ID."
}
/* const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let boticon = client.user.displayAvatarURL;
 let embed1 = new Discord.MessageEmbed()
  .setTitle("`Loading, please be patient.`")
  .addField('Please wait...', `Please wait while I recieve the vote... this message will be deleted shortly and will be replaced with the voting page.`)
  .setColor("BLUE")
  .setTimestamp();
const m = await message.channel.send(embed).then(msg => msg.delete(3000));
let embed = new Discord.RichEmbed()
.setColor("BLUE")
.addField(':gear: Bot Vote:', `${m.createdTimestamp - message.createdTimestamp}ms`)
.addField(':computer: API Latency:', `${Math.round(client.vote)}ms`)
.setThumbnail(boticon)
.setTimestamp()
message.channel.send(embed);
};*/

const discord = require("discord.js"); // Defining Discord

module.exports.run = async (client, message, args) => {
  // Command Handler Module Code
  /* let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    const m = await message.channel.send(
      "Want to support us? Vote for Cryptic!"
    );*/

    let E = new discord.MessageEmbed() // Start of embed
      //.setTitle("vote! :stopwatch:") // Embed Title
      .setColor("BLUE")
      .setTitle(
        "Vote for Cryptic",
        `${message.createdTimestamp - message.createdTimestamp}ms`
      ) // Shows vote
      .setDescription(
        "[Top.gg/Cryptic](https://top.gg/bot/612134650114080818/vote) "
      )

      .setFooter("Top.gg Voting page for Cryptic")
      .setTimestamp();

    message.channel.send(E); // Sending the embed
  };

module.exports = {
  name: "vote",
  category: "bot",
  description: "Vote for the bot | Cryptic"
}
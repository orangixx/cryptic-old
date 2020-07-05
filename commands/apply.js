const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {};

module.exports.run = async (client, message, args, prefix) => {
  let allowed = ["405497010385321995"];

 // if (!allowed.includes(message.author.id)) return message.channel.send("Applications are __Pending__, please wait!");

  let embed = new Discord.MessageEmbed()

    .setTitle("__Cryptic's Lounge Staff Applications__")
    .setDescription(
      "If you have any questions about applying, feel free to contact <@405497010385321995>, or anyone else from the Staff team!"
    )
    .addField(
      "Moderator Application",
      `[Apply](https://forms.gle/oFKTZBJ9AB5xE3PaA)`
    )
    .addField(
      "Support Team Application",
      `[Click Here](Closed)`
      )
    .addField("__Applications Status__", "Moderator: ``Open`` || Support Team: ``Closed``")
    .addField(
      "__What do I do after applying?__",
      "Please wait up to 5 business days for your application to be reviewed. Thank you for your interest in becoming part of our amazing staff team!"
    )
    .setColor("RANDOM")
    .setImage(
      "https://cdn.discordapp.com/attachments/652145587088523265/670691364488478751/giphy_2.gif"
    )
    .setTimestamp()
    // .setFooter("Staff Application Information 6/28/20");

 // message.delete();
  return message.channel.send(embed);
};
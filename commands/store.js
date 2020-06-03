const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, config) => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription("**Use c!buy <item> to buy an item!**")
    .addField(`Candy`, "`100$`\nGives you the candy role!")
    .addField(`Rare Dog food`, "`4000$`\nGives you the admin role!")
    .setColor("ORANGE");

  message.channel.send(embed);
};

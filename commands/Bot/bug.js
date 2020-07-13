const Discord = require('discord.js')
module.exports = {
    name: "bug",
    aliases: ["reportbug", "bugreport"],
    category: "bot",
    run: (client, message, args, tools) => {

let sicon = ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzrQvrPwzgkpf5nyw-qdJi4wrmMCyhGXcWDp8rFKXux64ACcy0&usqp=CAU");
let rreason = args.join(' ');
if (!rreason) return message.channel.send("You need to mention a Reason!")
console.log("1") // No reason creating problems


let reportEmbed = new Discord.MessageEmbed()
 .setAuthor("-Bug Report-")
 .setColor("BLACK")
 .setThumbnail(sicon)
 .addField("Bug Reported By", `${message.author}`)
 .addField("Bug Reported at", message.createdAt)
 .addField("Bug Report reason", rreason);

let Channel = message.guild.channels.cache.find(ch => ch.name === "reported-bugs")
if(!Channel)return message.channel.send(`There is no channel in this guild which is called \`reports\``)
 console.log("3") // Channel exists


 message.delete();
 console.log("4") // Message deleted
 Channel.send(reportEmbed);
 console.log("5") // Report message sent
 let embed = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Bug Report sent!")
 .setFooter("You bug report will be looked at soon!") .setTimestamp()
 message.channel.send(embed) 
    }
}

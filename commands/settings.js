const { Message, MessageEmbed, Client } = require("discord.js");
const settings = require("../models/settings");
const defSettings = require("../defSettings");

module.exports = {
    name: "settings",
    description: "A command to control all settings for Cryptic.",
    run: async (client = new Client(), message = new Message(), args = new Array()) => {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not have perms to use this command.");

        const embed = new MessageEmbed()
        .setAuthor(`Settings for Cryptic`, message.guild.splashURL())

        settings.findOne({ guildID: message.guild.id }, async (err, res) => {

        if(!res) {
            const newdata = new settings(defSettings);
            return newdata.save()
        }

        if(!args[0]) {
            embed.addField(`Prefix`, res.prefix)
            .setFooter(`Cryptic Settings`)
        } else if(args[0].toLowerCase() === "prefix") {

            if(!args[1]) return message.channel.send(`Please enter a prefix!`)

            settings.findOneAndUpdate({ guildID: message.guild.id }, { prefix: args.join(" ").slice(1) })

            embed.setDescription(`I have changed the prefix to ${args.slice(1).join(" ")}`)

        } else {
            message.channel.send(`Please enter valid types of options < prefix > or none to see the settings.`)
        }
        message.channel.send(embed)
    })
    }
}
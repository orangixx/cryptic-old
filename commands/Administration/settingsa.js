const { Message, MessageEmbed, Client } = require("discord.js");
const settings = require("../../models/settings");
const defSettings = require("../../defSettings");

module.exports = {
    name: "settings",
    category: "administration",
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

        } else if(args[0].toLowerCase() === "welcome") {
        if(args[1].toLowerCase() === "channel") {

            message.channel.send(`Supply the channel name or ID with no #`)

            if(!message.guild.channels.cache.get(args[2]) || !message.guild.channels.cache.find(c => c.name === args[2])) return message.channel.send(`That's not a valid channel!`)

            settings.findOneAndUpdate({ guildID: message.guild.id }, { welcomechannel: args[2] })
            message.channel.send(`I have changed the welcome and leave channel to ${`#${message.guild.channels.get(args[2]).id}` || `#${message.guild.channels.cache.find(c => c.name === args[2]).id}`}`)

        } else if(args[1].toLowerCase() === "boolean") {
                if(res.welcome) {
                    settings.findOneAndUpdate({ guildID: message.guild.id }, { welcome: false })
                    message.channel.send(`I have toggled welcome messages to \`False\``)
                } else {
                    settings.findOneAndUpdate({ guildID: message.guild.id }, { welcome: true })
                    message.channel.send(`I have toggled welcome messages to \`True\``)
                }
            } else if(args[1].toLowerCase() === "message") {
                if(!args[2]) return message.reply(`you need to supply a welcome message!`)
                message.channel.send(`Available variables: {member}, {membername}, {memberid}, {membercount}, {guildname}, {guildid}, {ownerid}, {owner}, {ownername}`)
                settings.findOneAndUpdate({ guildID: message.guild.id }, { welcomemsg: args.join(" ").slice(1) })
                message.channel.send(`I have succesfully changed the welcome message to \`${args.join(" ").slice(1)}\``)
            }

        } else if(args[0].toLowerCase() === "leave") {
            if(args[1].toLowerCase() === "boolean") {
                if(res.welcome) {
                    settings.findOneAndUpdate({ guildID: message.guild.id }, { leave: false })
                    message.channel.send(`I have toggled leave messages to \`False\``)
                } else {
                    settings.findOneAndUpdate({ guildID: message.guild.id }, { leave: true })
                    message.channel.send(`I have toggled leave messages to \`True\``)
                }
            } else if(args[1].toLowerCase() === "message") {
                if(!args[2]) return message.reply(`you need to supply a leave message!`)
                message.channel.send(`Available variables: {member}, {membername}, {memberid}, {membercount}, {guildname}, {guildid}, {ownerid}, {owner}, {ownername}`)
                settings.findOneAndUpdate({ guildID: message.guild.id }, { leavemsg: args.join(" ").slice(1) })
                message.channel.send(`I have succesfully changed the leave message to \`${args.join(" ").slice(1)}\``)
            }

        } else {
            message.channel.send(`Please enter valid types of options < prefix > or none to see the settings.`)
        }
        message.channel.send(embed)
    })
    }
}
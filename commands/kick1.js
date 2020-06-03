/*const { MessageEmbed } = require("discord.js")
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../functions.js");

module.exports = {
    name: "kick",
    category: "Moderation",
    description: "Kicks The Member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        //No Author Permission
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ You Do Not Have Permissions To Kick Members.")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        //No Args
        if (!args[0]) {
            return message.reply("Please Mention A User to Kick!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        //No Reason
        if (!args[1]) {
            return message.reply("Please Provide A Reason to Kick That User!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }
        
        //No Bot Permission
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ I Do Not Have Permission To Kick Members!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // No Member Found
        if (!toKick) {
            return message.reply("I Couldn't Find That Member. Try Again!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        //Can't Kick Yourself
        if(message.author.id === toKick.id) {
            return message.reply("You Can't Kick Yourself!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        //Kickable
        if(!toKick.kickable) {
            return message.reply("I Am Not High Enough In The Role Hierarchy To Kick That Person!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setDescription(stripIndents`**\\> Kicked Member:** ${toKick} (${toKick.id}))
            **\\> Kicked By:** ${message.author} (${message.author.id})
            **\\> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor("This Verification Becomes Invalid After 30 Seconds")
            .setDescription(`Are You Sure That You Want To Kick ${toKick}?`);

        message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 30, ["✅","❌"]);

            if(emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply("Kick Cancelled!")
                    .then(m => m.delete({ timeout: 10000, reason: 'Delete Error Message' }));
            }
        });
    }
}
*/

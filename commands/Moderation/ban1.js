const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
    category: "Moderation",
    description: "Bans The Member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ You Do Not Have Permission To Ban Members!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        
        }

        // No args
        if (!args[0]) {
            return message.reply("Please Mention A User To Ban.")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please Provide A Reason To Ban.")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I Do Not Have Permission To Ban Members!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("I Couldn't Find That User. Try Again!")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You Can't Ban Yourself...")
                .then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("I Am Not High Enough In The Role Hierarchy To Ban That User!")
                //.then(m => m.delete({ timeout: 5000, reason: 'Delete Error Message' }));
        }
        
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setDescription(stripIndents`**\\> Banned member:** ${toBan} (${toBan.id})
            **\\> Banned by:** ${message.member} (${message.member.id})
            **\\> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to ban ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Ban Cancelled.`)
                    .then(m => m.delete({ timeout: 10000, reason: 'Delete Error Message' }));
            }
        });
    }
}

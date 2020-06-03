const { getMember, formatDate } = require("../functions.js");
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "whois",
    aliases: ["userinfo", "user", "who"],
    category: "Info",
    description: "Returns User Information",
    usage: "[username | id, | mention]",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));

        //Member Variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .cache.filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join(", ") || "None";

        //User Variables
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

            .addField('Member Information', stripIndents`**\\• Display name:** ${member.displayName}
            **\\• Joined At:** ${joined}
            **\\• Roles:** ${roles}`, true)

            .addField('User Information', stripIndents`**\\• ID:** ${member.user.id}
            **\\• Username:** ${member.user.username}
            **\\• Discord Tag:** ${member.user.tag}
            **\\• Created At:** ${created}`, true)

            .setTimestamp()

        if (member.user.presence.activities)
            embed.addField(`Currently Playing`, `**\\• Activity:** ${member.user.presence.activities}`);

        message.channel.send(embed);
    }
}
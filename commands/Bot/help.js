const { readdirSync } = require("fs");
const Config = require("../../models/settings");
const defSetting = require("../../defSettings")(message.guild.id);





module.exports = {
    name: "help",
    description: "The command to define usage, category, description, aliases and accessableby",
    category: "Miscellaneous",
    usage: "help (command)",
    accessableby: "Members",
    aliases: ["?"],
    run: async (bot = new Discord.Client(), message = new Discord.Message(), args) => {

        var prefix;

        Config.findOne({ guildID: message.guild.id }, async (err, res) => {
            if(err) return console.error(err)
            if(!res) { const newdata = new Config(defSetting); prefix = "c!"}
    
            prefix = res.prefix
    
        let category;
    
        let p = prefix
    
    
        const embed = new Discord.MessageEmbed()
        embed.setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
        embed.setThumbnail(message.author.displayAvatarURL)
        embed.setColor(color.darkgreen)
    
    
        if(!args[0]) {
            const categories = readdirSync("./commands/")
            embed.setDescription(`These are the available commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**\nThe default prefix of the bot is: **${botconfig.prefix}**\n\n**Do ${p}help  <Command Name> to get information about a command!**\nSome commands may require arguments (required - <>, optional - ()).\n\n`)
            embed.setFooter(`© Cryptic Bot | Total commands: [${bot.commands.size}]`, bot.user.displayAvatarURL);
    
            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.category.toLowerCase() === category.toLowerCase())
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
    
    
                try {
                    embed.addField(`**❯ Category: ${capitalise}** [${dir.size}]:`, dir.map(c => `\`${c.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })
    
            return message.channel.send(embed)
        }   else if(args[0] && bot.commands.get(bot.aliases.get(args[0].toLowerCase())) || bot.commands.get(cmd.slice(prefix.length))) {
            if(!command) return message.channel.send(embed.setTitle("Invalid command").setDescription(`Do \`${prefix}help\`for the list of commands!`))
    
            embed.setDescription(`**Some commands may require arguments (required - <>, optional - ()).**\n\nThe bot's prefix is: \`${prefix}\`\n**Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n**Description:** ${command.description || "No description provided."}\n**Usage:** ${prefix}${command.usage || "No usage found."}\n**Accessible by:** ${command.accessableby || "Members"}\n**Category:** ${command.category.slice(0, 1).toUpperCase() + category.slice(1) || "Miscellaneous"}\n**Aliases:** ${p}${command.aliases ? command.aliases.join(`, ${p}`) : "No aliases"}`)
    
            message.channel.send(embed)
    
        }
    })
    }
}

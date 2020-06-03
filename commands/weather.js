const { MessageEmbed } = require("discord.js")
const weather = require("weather-js");

module.exports = {
    name: "weather",
    category: "Info",
    run: async (client, message, args) => {
        weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {
            let degrees = ("°C")
            if (!args[0]) return message.reply("Please enter a location.")

            if (err) message.channel.send(err);

            if (result.length === 0) {
                message.reply('**Please enter a valid location.**')
                return;
            }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Temperature', `${current.temperature} ${degrees}`, true)
                .addField('Feels Like', `${current.feelslike} ${degrees}`, true)
                .addField('Winds', current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send(embed);
        })
    }
};
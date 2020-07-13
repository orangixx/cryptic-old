const { readdirSync } = require("fs");

module.exports = async client => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (var file of commands) {
            var pull = require(`../commands/${dirs}/${file}`);
            client.commands.set(pull.name, pull);
            if(!pull.name) pull = file.split('.')[0]
            var name = file.split('.')[0]
            console.log(`Loaded ${name}`)
            if (pull.aliases) pull.aliases.forEach(a => client.aliases.set(a, pull.name));
          };
        };
        ["Administration", "Economy", "Fun", "Miscellaneous", "Moderation", "Music", "Bot", "NSFW"].forEach(x => load(x));
};
const fs = require("fs");
const { Client } = require('discord.js')

module.exports = async (client = new Client()) => {
fs.readdir('./events/', async (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        var event = require(`../events/${file}`);
        var name = file.split('.')[0];
        console.log(`Loaded ${name}`);
        client.on(name, event.bind(null, client));
    })
});
}
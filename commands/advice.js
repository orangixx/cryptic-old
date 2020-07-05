const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "advice",
        "description": "Gives you an advice",
        "aliases": [],
        "syntax": "advice"
    },
    run: (client, message, args) => {
        message.delete().catch(() => {});

        request({
            uri: "https://api.adviceslip.com/advice",
            json: true
        }).then(data => {
            message.channel.send(`\`\`\`asciidoc\nADVICE!\n=====\nYour advice: ${data.slip.advice}\n\`\`\``);
        });
    }
}
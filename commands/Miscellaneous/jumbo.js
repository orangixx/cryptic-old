exports.run = function(client, message, args) {
  let disabled = 0;
  var fs = require("fs");
    if (args.length < 1) {
      throw "Please provide an emoji to enlarge.";
    }

    if (args[0].charCodeAt(0) >= 55296) {
      throw "Cannot enlarge built-in discord emoji.";
    }

    const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);

    if (!match || !match[1]) {
      throw "Please provide a valid emoji.";
    }

    const emoji = client.emojis.get(match[1]);

    if (!emoji) {
      throw "That emoji could not be identified!";
    }

    message.channel.send({
      files: [emoji.url]
    });
  }

  exports = {
    name: "jumbo",
    usage: "c!jumbo <emoji>",
    description: "Enlarges emojis!",
    category: "miscellaneous"
};
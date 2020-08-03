const hastebin = require("hastebin-gen");

exports.run = (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");

    let haste = args.slice(0).join(" ");

    let type = args.slice(1).join(" ");

    if (!args[0]) {
      return message.channel.send("What do you want to post in Hastebin?");
    }

    hastebin(haste)
      .then(r => {
        message.channel.send("`Posted to Hastebin at this URL:`  " + r);
      })
      .catch(console.error);

    message.delete();
};

module.exports = {
  name: "hastebin",
  category: "miscellaneous"
}
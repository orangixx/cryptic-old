const randomizeCase = word =>
  word
    .split("")
    .map(c => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
    .join("");

exports.run = (bot, message, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.i === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    if (args.length < 1)
      return message.channel.send("Please provide some text to clapify");

    message.channel.send(args.map(randomizeCase).join(":clap:"));

    message.delete();
  }
};

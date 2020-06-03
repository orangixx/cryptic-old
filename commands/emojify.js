const mapping = {
  " ": "   ",
  "0": ":zero:",
  "1": ":one:",
  "2": ":two:",
  "3": ":three:",
  "4": ":four:",
  "5": ":five:",
  "6": ":six:",
  "7": ":seven:",
  "8": ":eight:",
  "9": ":nine:",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.other === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    if (args.length < 1) {
      message.channel.send("You must provide some text to emojify!");
    }
    message.delete();
    message.channel.send(
      args
        .join(" ")
        .split("")
        .map(c => mapping[c] || c)
        .join("")
    );
  }
};

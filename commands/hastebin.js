const hastebin = require("hastebin-gen");

exports.run = (bot, msg, args) => {
  let disabled = 0;
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.other === "0") {
      msg.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    let haste = args.slice(0).join(" ");

    let type = args.slice(1).join(" ");

    if (!args[0]) {
      return msg.channel.send("What do you want to post in Hastebin?");
    }

    hastebin(haste)
      .then(r => {
        msg.channel.send("`Posted to Hastebin at this URL:`  " + r);
      })
      .catch(console.error);

    msg.delete();
  }
};

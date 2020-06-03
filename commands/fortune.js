const request = require("request");

exports.run = (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.fun === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    request(
      "https://helloacm.com/api/fortune/",
      { json: true },
      (err, res, body) => {
        if (err) {
          console.error(err);
          return message.reply(
            "An error has occurred fetching your fortune. Error logged to console."
          );
        }
        message.reply(body);
      }
    );
  }
};

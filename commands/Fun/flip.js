const mapping =
  "¡\"#$%⅋,)(*+'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~";
// Start with the character '!'
const OFFSET = "!".charCodeAt(0);

module.exports.run = (client, message, args) => {
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
    if (args.length < 1)
      return message.channel.send("You must provide text to flip!");

    message.channel.send(
      args
        .join(" ")
        .split("")
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || " ")
        .reverse()
        .join("")
    );
    message.delete();
  }
};

module.exports = {
  name: "flip",
  category: "fun"
}
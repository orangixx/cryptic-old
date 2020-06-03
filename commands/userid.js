const snekfetch = require("snekfetch");
exports.run = (client, msg, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.fun === "0") {
      msg.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    let [title, contents] = args.join(" ").split("|");
    if (!contents) {
      [title, contents] = ["User ID sent!", title];
    }
    let rnd = Math.floor(Math.random() * 39 + 1);
    if (
      args
        .join(" ")
        .toLowerCase()
        .includes("burn")
    )
      rnd = 38;
    if (
      args
        .join(" ")
        .toLowerCase()
        .includes("cookie")
    )
      rnd = 21;
    if (
      args
        .join(" ")
        .toLowerCase()
        .includes("cake")
    )
      rnd = 10;

    if (title.length > 22 || contents.length > 22)
      return msg
        .edit("Max Length: 22 Characters. Soz.")
        .then(setTimeout(msg.delete.bind(msg), 1000));
    const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(
      title
    )}&t=${encodeURIComponent(contents)}`;
    snekfetch
      .get(url)
      .then(r => msg.channel.send("", { files: [{ attachment: r.body }] }));
    msg.delete();
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["mca"],
    permLevel: 0
  };
};

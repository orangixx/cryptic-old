const Discord = require("discord.js");
module.exports = {
  name: "8ball",
  category: "fun",
run = async (client, message, args) => {
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.fun === "0") {
      message.channel.send("Error: Command disabled");
    } else {
      cc();
    }
  });
  function cc() {
    if (!args[0]) return message.reply("**Usage:** ``c!8ball [question]``");
    let question = args.slice().join(" ");
    let color = "";
    let replies = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook is good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook is not so good.",
      "Very doubtful."
    ];
    let result = Math.floor(Math.random() * replies.length);

    if (replies[result] === "It is certain.") color = "RANDOM";
    if (replies[result] === "It is decidedly so.") color = "RANDOM";
    if (replies[result] === "Without a doubt.") color = "RANDOM";
    if (replies[result] === "Yes - definitely.") color = "RANDOM";
    if (replies[result] === "You may rely on it.") color = "RANDOM";
    if (replies[result] === "As I see it, yes.") color = "RANDOM";
    if (replies[result] === "Most likely.") color = "RANDOM";
    if (replies[result] === "Outlook is good.") color = "RANDOM";
    if (replies[result] === "Yes.") color = "RANDOM";
    if (replies[result] === "Signs point to yes.") color = "RANDOM";
    if (replies[result] === "Reply hazy, try again.") color = "RANDOM";
    if (replies[result] === "Ask again later.") color = "RANDOM";
    if (replies[result] === "Better not tell you now.") color = "RANDOM";
    if (replies[result] === "Concentrate and ask again.") color = "RANDOM";
    if (replies[result] === "Don't count on it.") color = "RANDOM";
    if (replies[result] === "My reply is no.") color = "RANDOM";
    if (replies[result] === "My sources say no.") color = "RANDOM";
    if (replies[result] === "Outlook is not so good.") color = "RANDOM";
    if (replies[result] === "Very doubtful.") color = "RANDOM";

    let newembed = new Discord.MessageEmbed()
      .setAuthor(question)
      .setColor("BLUE")
      .setDescription(
        `Asked By: ${message.author}\nResult: ${replies[result]}`
      );

    message.delete().catch(O_o => {});
    message.channel.send({
      embed: newembed
    });
  }
}
}
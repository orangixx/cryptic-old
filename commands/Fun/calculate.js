const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "calculate",
  category: "Fun",
  description: "Calculate something.",
  aliases: ["calc"],
  run: async (client, message, args) => {
    if (!args[0]) {
      if (!args[0])
        return message.reply("**Usage:** ``c!calculate [2*4 or 3+2, etc.]``");
    }

    let result;
    try {
      result = math.evaluate(
        args
          .join(" ")
          .replace(/[x]/gi, "*")
          .replace(/[,]/g, ".")
          .replace(/[÷]/gi, "/")
      );
    } catch (e) {
      return message.channel.send("Error calculating... Try again later!");
    }

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Calculation Success", client.user.displayAvatarURL())
      .addField(
        "Calculate Operation",
        `\`\`\`Js\n${args
          .join("")
          .replace(/[x]/gi, "*")
          .replace(/[,]/g, ".")
          .replace(/[÷]/gi, "/")}\`\`\``
      )
      .addField("Calculation Result", `\`\`\`Js\n${result}\`\`\``)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL());

    message.channel.send(embed);
  }
};
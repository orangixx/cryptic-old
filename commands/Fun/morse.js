const Discord = require("discord.js");

module.exports.run = async (client, message, args, i) => {
  var fs = require("fs");
  if (!args[1]) { return; }
    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
      morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(
        ","
      ),
      text = args.join(" ").toUpperCase();
    while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
      text = text
        .replace("Ä", "AE")
        .replace("Ö", "OE")
        .replace("Ü", "UE");
    }
    if (text.startsWith(".") || text.startsWith("-")) {
      text = text.split(" ");
      let length = text.length;
      for (i = 0; i < length; i++) {
        text[i] = alpha[morse.indexOf(text[i])];
      }
      text = text.join("");
    } else {
      text = text.split("");
      let length = text.length;
      for (i = 0; i < length; i++) {
        text[i] = morse[alpha.indexOf(text[i])];
      }
      message.delete;
      text = text.join(" ");
    }
    return message.channel.send("```" + text + "```");
};

module.exports = {
  name: "morse",
  category: "Fun",
  description: "Turns characters into Morse code"
}
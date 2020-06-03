/*const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();

const token = "";

const PREFIX = "c!";

 bot.on("ready", () => {
console.log("This bot is active!");
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "help":
      const Embed = new MessageEmbed()
        .setTitle("Cryptic's Help Commands")
        .setDescription("Here is a List of avaliable commands for Cryptic!")
        .addField(
          "Have any questions? Join the support server!",
          `__[Support Server](https://discord.gg/5wbQMxA)__`
        )

        .addField(":joy: Fun Commands", "``c!fun``")
        .addField(":busts_in_silhouette: Action Commands", "``c!action``")
        .addField(":ok: Text Commands", "``c!text``")
        .addField(":pushpin: Utility Commands", "``c!utility``")
        .addField(":moneybag: Economy Commands (Disabled)", "``c!economy``")
        .addField(":dog: Animal Commands", "``c!animal``")
        .addField(":smirk: NSFW Commands", "``c!nsfw``")
        .addField(":hammer: Moderation Commands (Disabled)", "``c!moderation``")
        .setColor("RANDOM");

      message.author.send(Embed);
      break;
  }
});

bot.login(token);
*/

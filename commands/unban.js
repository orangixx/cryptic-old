const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  category: "Moderation",
  description: "Unbans A Member",
  usage: "!unban <ID> <Reason>",
  run: async (client, message, args) => {
    try {
      const user = args[0];
      const logChannel =
        message.guild.channels.find(c => c.name === "logs") || message.channel;

      if (user) {
        message.guild
          .unban(args.slice(1).join(" "))
          .then(() => {
            message.reply(`Successfully unbanned ${user.tag}`);

            const embed = new MessageEmbed()
              .setTitle("User Unbanned")
              .setColor("GREEN")
              .setDescription(
                `Reason: ${args.slice(1).join(" ")}\nModerator: ${
                  message.author.username
                }`
              )
              .setTimestamp();

            message.channel.send(embed);
          })
          .catch(err => {
            message.reply("I was unable to unban the member");
          });
      } else {
        message.reply("You didn't give the UserID to unban!");
      }
    } catch (err) {
      message.channel.send("Their was an error!\n" + err + "").catch();
    }
  }
};

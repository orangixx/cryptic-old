const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

module.exports = {
  name: "nuke",
  category: "Moderation",
  description: "Nuke The Whole Channel",
  usage: "!nuke <Channel ID | Mentions Channel | Channel Name>",
  run: async (client, message, args) => {
    let channel =
      message.guild.channels.cache.find(
        c => c.name.toLowerCase() === args[0]
      ) ||
      message.guild.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message
        .reply("❌ You Do Not Have Permissions To Nuke Channels.")
        .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    if (!args[0]) {
      return message
        .reply("❌ Please Provide A Channel To Nuke!")
        .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    const promptEmbed = new MessageEmbed()
      .setColor("GREEN")
      .setAuthor("⚠️ This Action Is Irreversible! ⚠️")
      .setTitle("This Verification Will Expire In 30 Seconds!")
      .setDescription(`Are You Sure That You Want To Nuke ${channel}?`);

    message.channel.send(promptEmbed).then(async msg => {
      const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

      if (emoji === "✅") {
        const parent = channel.parent;
        const position = channel.position;
        console.log(position);
        channel
          .clone(undefined, true, true)
          .then(clone => {
            channel.delete();
            if (parent) {
              clone.setParent(parent);
              clone.setPosition(position);
            }
            const embed = new MessageEmbed()
              .setTitle(`☢️ **Tactical Nuke**`)
              .setDescription(`${clone} Has Been Cleared`)
              .setTimestamp()
              .setColor("ORANGE")
              .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL()
              );
            setTimeout(() => {
              clone.send(embed);
            }, 1000);
          })
          .catch(console.error);
      } else if (emoji === "❌") {
        msg.delete();

        message
          .reply("Nuke Cancelled!")
          .then(m =>
            m.delete({ timeout: 10000, reason: "Delete Error Message" })
          );
      }
    });
  }
};
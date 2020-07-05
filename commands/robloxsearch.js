const { MessageEmbed } = require("discord.js");
const roblox = require("noblox.js");
const { extractDate } = require("../functions.js");

module.exports = {
  name: "robloxsearch",
  category: "Games Info",
  aliases: ["rsearch"],
  Description: "...",
  run: async (client, message, args) => {
    let username = args[0];

    if (username) {
      message
        .reply(`🔎 Searching Up ${username}!`)
        .then(m =>
          m.delete({ timeout: 2000, reason: "Delete Searching Message" })
        )
        .then(m => m.delete(3000));
      roblox
        .getIdFromUsername(username)
        .then(id => {
          if (id) {
            roblox.getPlayerInfo(parseInt(id)).then(function(info) {
              let date = new Date(info.joinDate);
              let dateInfo = extractDate(date);
              let embed = new MessageEmbed()
                .setColor("#f9ae00")
                .setTitle("View Profile")
                .setURL(`https://roblox.com/users/${id}/profile`)
                .setTimestamp()
                .setThumbnail(
                  `https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`
                )

                .addField("Username", info.username || "Unresolvable", true)
                .addField("User ID", id || "Unresolvable", true)
                .addField("Blurb", info.blurb || "Nothing", true)
                .addField("Status", info.status || "Nothing", true)
                .addField(
                  "Account Age",
                  `${info.age} Days Old` || "Unresolvable"
                )
                .addField(
                  "Register Date",
                  `${dateInfo.month}/${dateInfo.day}/${dateInfo.year}` ||
                    "Unresolvable"
                )
                .setFooter(
                  message.member.displayName,
                  message.author.displayAvatarURL()
                );
              message.channel.send(embed);
            });
          }
        })
        .catch(function(err) {
          message.channel.send(
            "Sorry! That User Doesn't Seem To Exist. Double Check Your Spelling And Try Again!"
          );
        });
    } else {
      message.channel.send("Please Provide A Valid Username!");
    }
  }
};
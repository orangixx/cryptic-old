module.exports = {
  name: "clear",
  aliases: ["purge"],
  category: "Moderation",
  description: "Clears the chat",
  run: async (client, message, args) => {
    if (message.deletable) {
      message.delete();
    }

    // Member doesn't have permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("You do not have permissions to delete messages.")
        .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    // Check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message
        .reply("**Usage:** ``c!clear [amount]``")
        .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    // Maybe the bot can't delete messages
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("I do not have permissions to delete messages.")
        .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    message.channel
      .bulkDelete(deleteAmount, true)
      .then(deleted =>
        message.channel.send(`I deleted \`${deleted.size}\` messages.`)
      )
      .then(m => m.delete({ timeout: 5000, reason: "Delete Error Message" }))
      .catch(err => message.reply(`Something went wrong... ${err}`));
  }
};

const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author; //This will show us how much money a user has when we mention them
  let money = await db.fetch(`money_${user.id}`); //This will fetch the amount of money we have in our account
  message.channel.send(`${user} has a balance of $${money}`);
};

module.exports = {
  name: "balance",
  aliases: ["bal"],
  category: "economy"
};

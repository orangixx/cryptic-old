const { Client, Collection, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "close",
  aliases: ["end"]
};

module.exports.run = async (client, message, args) => {
  let allowed = ["405497010385321995", "342656844235538433", "375627393773207554", "263456445566025728", "556547437699792945", "275320180299530250", "321944279373185027", "259208178657394699"]
  if (!message.channel.name.startsWith("ticket-"))
    return message.channel.send("This is not a ticket channel.");
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      "Please contact a Support member if you would like this ticket closed."
    );
  message.channel.delete();
};
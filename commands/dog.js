const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "dog",
  category: "Fun",
  description: "Sends A Dog Image",
  run: async (client, message, args) => {
    // In this array,
    // you can put the subreddits you want to grab memes from
    const subReddits = ["dogs"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  }
};

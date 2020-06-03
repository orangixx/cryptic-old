const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "meme",
  category: "Fun",
  description: "Sends An Epic Meme",
  run: async (client, message, args) => {
    // In this array,
    // you can put the subreddits you want to grab memes from
    const subReddits = ["dankmeme", "meme", "me_irl"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  }
};

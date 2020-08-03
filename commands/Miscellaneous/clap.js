const randomizeCase = word =>
  word
    .split("")
    .map(c => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
    .join("");

module.exports.run = (client, message, args) => {
    if (args.length < 1)
      return message.channel.send("Please provide some text to clapify");

    message.channel.send(args.map(randomizeCase).join(":clap:"));

    message.delete();
};

module.exports = {
  name: "clap",
  category: "miscellaneous"
}
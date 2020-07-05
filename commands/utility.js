const discord = require("discord.js");

exports.run = async (client, message, args) => {
  let owner = client.users.cache.get("405497010385321995");
  let boticon = client.users.displayAvatarURL;
  let embed = new discord.MessageEmbed()
    .setTitle("Cryptic's Utility Commands")
    .setDescription(
      "`avatar\nbotinfo\ncreateinvite\nicon\ninvite\ninstagram\nmessage\nping\nrobloxsearch\nserverinfo\nserver1nfo2\nsecurelevel\nspotify\nshorturl\nstats\nuptime\nuserid\nvote\nweather\nwhois`"
    )
    .setFooter("Need help? Join our support server: https://discord.gg/5wbQMxA")
    .setColor("RANDOM")
    .setThumbnail(boticon);
  message.channel.send(embed);
};
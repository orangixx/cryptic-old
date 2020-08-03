const default_prefix = "c!";

module.exports = async client => {
  console.log(`Bot is Online! Username: ${client.user.tag}`);
  console.log(
    client.guilds.cache
      .array()
      .map(
        g =>
          `${g.name} (${g.id})  Guild Counter: ${client.guilds.cache.size} / User Counter: ${client.users.cache.size}`
      )
      .join("\n")
  );
  
  setInterval(function() {
        let statuses = [`${default_prefix}help | ${client.users.cache.size} users`. `${default_prefix}help | ${client.guilds.cache.size} servers | ${client.users.cache.size} users`, `client.guilds.cache.size} servers | ${default_prefix}help`]
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 8000)
};

// now it will show activity

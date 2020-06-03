const prefix = "c!";

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

  client.user.setPresence({
    status: "online",
    activity: {
      //name: `${prefix}help | ${client.guilds.cache.size} servers | ${client.users.cache.size} users`,
      //name: `${prefix}help | ${client.users.cache.size} users`,
      name: `${client.guilds.cache.size} servers | ${prefix}help`,
      type: "WATCHING"
    }
  });
};

// now it will show activity

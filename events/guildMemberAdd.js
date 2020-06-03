module.exports = async (client, member) => {
  const channel = client.channels.cache.find(
    channel => channel.name === "joins-and-boosts"
  );
  if (!channel || member.client) return;

  // console.log(`${member} joined`)

  channel.send(`Welcome to our server ${member}!`);
};

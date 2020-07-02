const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { token, prefix } = require("./config.json");
client.commands = new Discord.Collection();
//let xp = require("./xp.json");
require("dotenv").config();
const guildInvites = new Map();

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL, client);

dbl.on("posted", () => {
  console.log("Server count posted!");
});

dbl.on("error", e => {
  //console.log(`Oops! ${e}`);
});

const fs = require("fs");

require("./keepAlive.js")();

client.on("inviteCreate", async invite =>
  guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
);

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to kick some butt!`);
  client.guilds.cache.forEach(guild => {
    guild
      .fetchInvites()
      .then(invites => guildInvites.set(guild.id, invites))
      //.catch(err => console.log(err));
  });
});

  client.on("guildMemberAdd", async member => {
  const cachedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    const usedInvite = newInvites.find(
      inv => cachedInvites.get(inv.code).uses < inv.uses
    );
    const embed = new MessageEmbed()
     .setTitle(`${member.user.tag}`)
     .setDescription(
        `Hello there ${member.user.username}!`)
     .setFooter(`Member #${member.guild.memberCount}`)
    const welcomeChannel = member.guild.channels.cache.find(
      channel =>
        channel.name === "│general");
    if (welcomeChannel) {
      welcomeChannel.send(embed).catch(err => console.log(err));
    }
  } catch (err) {
   // console.log(err);
  }
});

client.commands = new Discord.Collection();
client.prefix = prefix;
client.queue = new Map();
client.aliases = new Discord.Collection();

const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
}

fs.readdir("./commands/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) {
    } else {
      let props = require(`./commands/${file}`);
      console.log("Successfully loaded " + file);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    }
  });
});

fs.readdir("./events/", (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    console.log("Successfully loaded " + file);
    let eventName = file.split(".")[0];
    client.on(eventName, eventFunc.bind(null, client));
  });
});

//client.on("warn", info => console.log(info));

//client.on("error", console.error);

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(prefix)) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      client.commands.get(command).execute(client, message, args);
    } catch (err) {
      //   console.log(err)
      //message.reply("I am getting am error with the used command. please contact the bot owner/developers.")
    }
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  /* let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1000;
  xp[message.author.id].xp = curxp + xpAdd;
  if (nxtLvl <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.MessageEmbed()
      .setTitle(`**${message.author.username}** Has Leveled up!`)
      .setColor("#0000FF")
      .addField("New Level", curlvl + 1);

    message.channel.send(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), err => {
    if (err) console.log(err);
  });*/

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  client.snipes = new Map();
  client.on("messageDelete", function(message, channel) {
    client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null
    });
  });
});

client.login(process.env.TOKEN);

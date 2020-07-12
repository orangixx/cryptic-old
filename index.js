const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const settings = require("./models/settings")
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Cryptic:197Cryptic493Admin19472@cryptic.bppjz.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB.')
});
const { MessageEmbed } = require("discord.js");
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
const message = require("./events/message");
const defSettings = require("./defSettings");

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

settings.findOne({ guildID: message.guild.id }, async (err, res) => {

if(!res) {
  const newdata = new settings(defSettings);
  newdata.save()
}

client.commands = new Discord.Collection();
client.default_prefix = res.prefix;
client.queue = new Map();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) {
    } else {
      let props = require(`./commands/${file}`);
      console.log("Successfully loaded " + file);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
      if(props.aliases) client.aliases.forEach(a => client.aliases.set(a, props)) 
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

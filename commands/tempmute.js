const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../config.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {
  //!tempmute @user 1s/m/h/d

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("You do not have perms to use that command.");
  if (args[0] == "help") {
    message.reply("Usage: !tempmute <user> <time: 1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!tomute) return message.reply("Please specify a user to mute.");
  if (tomute.hasPermission("MANAGE_MESSAGES"))
    return message.reply("I can't mute that user.");
  let reason = args.slice(2).join(" ");
  if (!reason) return message.reply("Please supply a reason.");
  console.log(reason);

  let muterole = message.guild.roles.find(`name`, "muted");

  //start of create role
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if (!mutetime) return message.reply("You didn't specify a time.");

  message.delete().catch(O_o => {});

  try {
    await tomute.send(`You have been muted for ${mutetime}.`);
  } catch (e) {
    message.channel.send(
      `I have muted that user... But their DMs were locked. They will be muted for ${mutetime}`
    );
  }

  let muteembed = new Discord.RichEmbed()
    .setDescription(`Tempmute executed by ${message.author}`)
    .setColor(orange)
    .addField("Muted User", tomute)
    .addField("Muted In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Length", mutetime)
    .addField("Reason", reason);

  let logschannel = message.guild.channels.find(`name`, "logs");
  if (!logschannel) return message.reply("You need to create a logs channel.");
  logschannel.send(muteembed);

  await tomute.addRole(muterole.id);

  setTimeout(function() {
    tomute.removerole(muterole.id);
  });

  message.delete().catch(O_o => {});
  logschannel.send(muteembed);

  //end of module
};

module.exports.help = {
  name: "tempmute"
};

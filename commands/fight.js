/*const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const attacks = {
  punch: {
    damage: {
      min: 10.0,
      max: 25.0
    },
    attackChance: 0.9,
    messages: [
      "was punched in the gut by",
      "was punched in the face by",
      "was punched in the stomach by"
    ]
  },
  kick: {
    damage: {
      min: 15.0,
      max: 30.0
    },
    attackChance: 0.8,
    messages: [
      "was kicked in the gut by",
      "was dropkicked by",
      "was kicked in the butt by"
    ]
  },
  slam: {
    damage: {
      min: 17.0,
      max: 35.0
    },
    attackChance: 0.7,
    messages: [
      "was slammed on the head with a ladder by",
      "was slammed in the face with a hammer by",
      "was slammed on the head with a metal door by",
      "was slammed into the wall by"
    ]
  }
};

const validActions = Object.keys(attacks).concat("leave");
const validActionRegex = new RegExp(validActions.join("|"), "i");
const validActionString = validActions
  .map(action => `**${action}**`)
  .join(" | ");

class Player {
  constructor(user) {
    if (Player.cache[user.id]) {
      return Player.cache[user.id];
    }

    Player.cache[user.id] = this;

    this.user = user;

    this.reset();
  }

  reset() {
    this.hp = 100;
    this.isFighting = false;
    this.miss = 0;
  }

  debug() {
    console.log(`${this.user.username}'s HP: ${this.hp}`);
  }
}

Player.cache = {};

const generateMessage = () =>
  Object.keys(attacks)
    .map(name => {
      const attack = attacks[name];
      return `**${name}**\nDamage: \`${attack.damage.min}-${
        attack.damage.max
      }\`\nAccuracy: \`${Math.floor(attack.attackChance * 100)}%\``;
    })
    .join("\n\n");

exports.run = (bot, message, args) => {
  let disabled = 0;
  if (disabled === 1) {
    message.channel.send();
  } else {
    if (args[0] === "info") {
      message.author.send(generateMessage());
      message.channel.send(":crossed_swords: Sent attack information in DMs!");
      return;
    }

    const mention = message.mentions.users.first();

    var user2 = message.mentions.members.last();
    if (!user2) {
      message.reply("**Usage:** `c!fight [user]`");
      return;
    }

    if (mention.bot) {
      return message.channel.send("You can't play with a bot!");
    }

    if (mention.id === message.author.id) {
      return message.channel.send("You can't fight yourself!");
    }

    const you = new Player(message.author);
    if (you.isFighting) {
      return message.channel.send("You're already fighting someone!");
    }

    const opponent = new Player(mention);
    if (opponent.isFighting) {
      return message.channel.send("Your opponent is already in a fight!");
    }

    you.isFighting = true;
    opponent.isFighting = true;

    fight(message, you, opponent, true);
  }

  const fight = (message, player1, player2, turn) => {
    if (!player1.isFighting || !player2.isFighting) {
      // If either one of them isn't supposed to be fighting, reset and exit.
      player1.reset();
      player2.reset();

      return;
    }

    const currentPlayer = turn ? player1 : player2;
    const targetPlayer = turn ? player2 : player1;

    message.channel.send(
      `**${currentPlayer.user.username}**, it's your turn. Here's your options: ${validActionString}.`
    );
    message.channel
      .awaitMessages(
        response =>
          response.author.id === currentPlayer.user.id &&
          validActionRegex.test(response.content),
        {
          max: 1,
          time: 30000,
          errors: ["time"]
        }
      )
      .then(collected => {
        const msg = collected.first();
        const input = msg.content.toLowerCase();

        if (input === "leave") {
          msg.channel.send(
            `**${currentPlayer.user.username}** surrendered to **${targetPlayer.user.username}**! Such a nub...`
          );

          currentPlayer.reset();
          targetPlayer.reset();

          return;
        }

        currentPlayer.miss = 0;

        const attack = attacks[input];

        if (Math.random() > attack.attackChance) {
          message.channel.send("You missed! LMFAO :joy:");
        } else {
          // variation = max - min
          // rand * variation + min
          const damage = Math.round(
            Math.random() * (attack.damage.max - attack.damage.min) +
              attack.damage.min
          );

          targetPlayer.hp -= damage;
          message.channel.send(
            `**${targetPlayer.user.username}** ${randomItem(
              attack.messages
            )} **${currentPlayer.user.username}**\n**${
              targetPlayer.user.username
            }**'s health is now ${targetPlayer.hp} (-${damage} HP).`
          );

          if (targetPlayer.hp <= 0) {
            message.channel.send(
              `**${targetPlayer.user.username}** was defeated by **${currentPlayer.user.username}**! Such a nub`
            );
            targetPlayer.reset();
            currentPlayer.reset();
            return;
          }
        }

        // By doing !turn it inverts the turn state. Ezpz ;)
        fight(message, player1, player2, !turn);
      })
      .catch(() => {
        message.channel.send(
          `**${currentPlayer.user.username}** didn't respond, skipping their turn!`
        );
        currentPlayer.miss++;

        if (currentPlayer.miss >= 2) {
          message.channel.send(
            "Looks like no one is responding, terminating the game."
          );

          currentPlayer.reset();
          targetPlayer.reset();

          return;
        }

        fight(message, player1, player2, !turn);
      });
  };
};
*/

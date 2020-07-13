const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");

  fs.readFile("./e/cmds.json", "utf8", function(err, contents) {
    var c = JSON.parse(contents);
    if (c.nsfw === "0") {
      message.channel.send();
    } else {
      cc();
    }
  });
  function cc() {
    /*if (!args[0]) return message.reply("Mention someone to fuck!");*/

    const notnsfw = new Discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    var subreddits = [
      "https://images-ext-2.discordapp.net/external/TE7O5zO5fIZbL51vHlTiE8rSl0_EJkoyeyk0iM4j_Qo/https/cdn.nekos.life/hentai/sex31.jpg?width=360&height=270",
      "https://images-ext-2.discordapp.net/external/yxwSXZpfNGoEPY98qSAPvk9MAJJ4Mpv-tNFqbdk1NwI/https/cdn.nekos.life/hentai/sex28.png?width=172&height=270",
      "https://images-ext-1.discordapp.net/external/Q2GyEP4U_pJJUW1CZvSWtZrKKI6sD8HS8X-hgOCvGTg/https/cdn.nekos.life/hentai/sex44.jpg?width=186&height=270",
      "https://images-ext-2.discordapp.net/external/YEkT4HQyjgLSw89VDrffRDlQlJiV8zjVKlv2iYfBVwo/https/cdn.nekos.life/hentai/sex55.jpg?width=225&height=270",
      "https://images-ext-1.discordapp.net/external/VnA2k0ADty1-pYpqfSHeieMNc2GbkEmj0wKpVc66Xj0/https/cdn.nekos.life/hentai/sex01.jpg?width=190&height=270",
      "https://images-ext-1.discordapp.net/external/IfpEzz3-OyRcUfRmpryb5b90hJBBr5cACuErtuPI8KY/https/cdn.nekos.life/hentai/sex42.png?width=186&height=270",
      "https://images-ext-1.discordapp.net/external/IeHH2CkkW8AoFyIuZTc26XoyUdwkEUexPI2cq6TMy50/https/cdn.nekos.life/hentai/sex09.jpg?width=207&height=270",
      "https://images-ext-1.discordapp.net/external/HgTtzXvlA6jWvOZtzyMCkncQ7VqfYcXsoOn-29ygdYw/https/cdn.nekos.life/hentai/sex04.jpg?width=360&height=264",
      "https://images-ext-2.discordapp.net/external/qRxuIynwr4BbeKPDM-yFJMuTWQoT6MKq0LURNFoSR3Q/https/cdn.nekos.life/hentai/sex02.jpg?width=360&height=255",
      "https://images-ext-2.discordapp.net/external/2ogMey1kskmg7FRVEDUKAooprI2qWxdYswvXk01QHh4/https/cdn.nekos.life/hentai/sex53.jpg?width=360&height=270",
      "https://images-ext-2.discordapp.net/external/thJvd5WiR4cJSYLrhXQADDzOny9ci_k5pDzCmhWEGnw/https/cdn.nekos.life/hentai/sex10.jpg?width=201&height=270",
      "https://images-ext-1.discordapp.net/external/ODQAD26uvTrDD-GVWfbDau8IvgwX5Ugbppk8zLkpWpA/https/cdn.nekos.life/hentai/sex46.png?width=191&height=270",
      "https://images-ext-1.discordapp.net/external/ODQAD26uvTrDD-GVWfbDau8IvgwX5Ugbppk8zLkpWpA/https/cdn.nekos.life/hentai/sex46.png?width=191&height=270",
      "https://images-ext-1.discordapp.net/external/eHGU4m9HG5pZoCO_P14QB2k13EjH9dRBdywYkgsafZQ/https/cdn.nekos.life/hentai/sex23.jpg?width=277&height=270",
      "https://images-ext-2.discordapp.net/external/j3zOJ_iq7cY2rE_ZkvwtDraOWHjkFXPuPiUBuLu2Ito/https/cdn.nekos.life/hentai/sex27.png?width=191&height=270",
      "https://images-ext-2.discordapp.net/external/eHwgdThjCdGcobcpsxLzG-EA89-YYAx6vqUP5ay4o9A/https/cdn.nekos.life/hentai/sex32.jpg?width=195&height=270",
      "https://images-ext-2.discordapp.net/external/1tCwkSdwBrMTcLsjj31fU6dTLkIZu2Y3WDtLG9tNcHc/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0389.gif?width=360&height=270",
      "https://images-ext-2.discordapp.net/external/Hzf1ZgOypFUrQoVElYaocVTGFqhXniIVvRvRCbyNTBY/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_1919.gif?width=342&height=270",
      "https://images-ext-1.discordapp.net/external/qYHZiXuT59PtHoVry3n7CnXtmZwcD9wzeysd1GgtWEg/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_0966.gif?width=360&height=202",
      "https://images-ext-1.discordapp.net/external/6m5VMv9s4rw1Gl-3qKJ-BHD9CmT9saU-1zCnHLPNh_U/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0563.gif?width=360&height=203",
      "https://images-ext-1.discordapp.net/external/U7SbSIIaQgO71D0tM7AHmEhcw00Wxo1kbC3UGxrWX8s/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0417.gif?width=360&height=203",
      "https://images-ext-2.discordapp.net/external/2LT4YmpfzTEuJkR4z5AUsuvFTyTRfyjGyyhmg8CEdnY/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0251.gif?width=360&height=202",
      "https://images-ext-1.discordapp.net/external/rsVUOd4SNs8v9hUje3QbpSvm8MfNxGIqK1eZbKOIzBo/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0790.gif?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/uy9FSuRmV-cznpPjYJBdTKYqbUD8umckyHuWN5gYTW8/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_0004.gif?width=360&height=200",
      "https://images-ext-1.discordapp.net/external/mBYWcKXutS6fyH5Vt_9-n2-DuEnm47IiMU3FMw6Rdrc/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_1098.gif?width=360&height=203",
      "https://images-ext-2.discordapp.net/external/TOHWKSAVcp796MT1NHLcqWp7ZwcLZkwqrfdjlbh3vlg/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_0911.gif?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/S6xUORPRsfJyleVIfyFwEBuwtrsjVvBl-r9_QrSDiic/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0179.gif?width=360&height=202",
      "https://images-ext-1.discordapp.net/external/pIu1LzrimaZFWPUs6xnvwRx-z2MSGkMsRs1BIdPq43o/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0857.gif?width=360&height=194",
      "https://images-ext-1.discordapp.net/external/G4TMfADgp9_rr3SjJm0aaSuPBshwAqVd_CUdRydE-RY/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_1286.gif?width=360&height=204",
      "https://images-ext-2.discordapp.net/external/PXbTxxY8sXI4iEeTMfoFYhradl2TQgis5tmM_nP5LqI/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_1508.gif?width=360&height=203",
      "https://images-ext-1.discordapp.net/external/qYR7ggmB2q5etl6z_KxwvXcIfUCg5WMU__HjXb_ENVc/https/cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0431.gif?width=360&height=203"
    ];
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    /*var user = message.mentions.members.first();
    if (!user) {
      message.reply(`Mention someone to fuck.`);
    }*/

    if (message.channel.nsfw === true) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        /*.setDescription(
          `:point_right::ok_hand: ${message.author} fucked **${user}**`
        )*/
        .setImage(sub);

      message.channel.send(embed);
    } else {
      message.channel.send(notnsfw);
    }
  }
};

module.exports = {
  category: "nsfw"
}
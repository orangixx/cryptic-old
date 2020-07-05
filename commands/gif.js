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
      "https://images-ext-1.discordapp.net/external/l-FG-yKwTGZTvPPtxvB3R5H9a0CFoIW129PTpMqyEj4/https/cdn.boob.bot/Gifs/15D9.gif?width=360&height=190",
      "https://images-ext-1.discordapp.net/external/kk-Ver8JAZf3hbz8BrP1D-x8BWxoYmnsrSY8SkNOa6Q/https/cdn.boob.bot/Gifs/197C.gif?width=360&height=207",
      "https://images-ext-1.discordapp.net/external/T7eRppc82g58Bz8XHT5yxoDiV-ivVyDRWB3VHeF4z10/https/cdn.boob.bot/Gifs/183C.gif?width=360&height=203",
      "https://images-ext-1.discordapp.net/external/jbmT577uPCduSVxOM9O4aTMfkSlHgzRHJCxQDI9b9K8/https/cdn.boob.bot/Gifs/16C0.gif?width=266&height=201",
      "https://images-ext-2.discordapp.net/external/eaw66rEefumnDWHMXgvkPx0fohCb-8-nhNwGbdq5HM4/https/cdn.boob.bot/Gifs/17D9.gif?width=360&height=186",
      "https://images-ext-1.discordapp.net/external/IYJ3cMiwKXmVAVIxfA7WTEpW9rmdG_92uLP7s9WfZBI/https/cdn.boob.bot/Gifs/15E3.gif?width=360&height=188",
      "https://images-ext-2.discordapp.net/external/0QKOVlJvrpcZSZoE1hhbs8nKytYOPV7GnPUqHsfWjbg/https/cdn.boob.bot/Gifs/169E.gif?width=360&height=160",
      "https://images-ext-1.discordapp.net/external/EW-M6-ioM9hKx1_Rvp3N_nYhtcTjW7NTaiZP18Canow/https/cdn.boob.bot/Gifs/18E2.gif?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/Wre3EYL9jaKohriRzJjl5NB9h3rekGKNgsjotbXs8Bc/https/cdn.boob.bot/Gifs/18C9.gif?width=273&height=208",
      "https://images-ext-2.discordapp.net/external/_scFoFFFxIf8Ku0Py-9ddTLcy9mZa--WQhYo9T4aeO8/https/cdn.boob.bot/Gifs/18A8.gif?width=360&height=199",
      "https://images-ext-1.discordapp.net/external/DBuOfYgo_fqDXncE5NGFpjsPpFlzpJqyRGV0uxLnD6g/https/cdn.boob.bot/Gifs/173F.gif?width=360&height=144",
      "https://images-ext-1.discordapp.net/external/BvNsaMwgFQ3yK4tF7MzOQ4gqUdgr-C9NqvdZpOYA6-c/https/cdn.boob.bot/Gifs/17E3.gif?width=270&height=204",
      "https://images-ext-2.discordapp.net/external/lvRSTAH7ktqyBOrWUOOjIfwPao9_TqclgAWMyCOiFo4/https/cdn.boob.bot/Gifs/19AD.gif?width=130&height=76",
      "https://images-ext-1.discordapp.net/external/Pyo5traUOS-M_pVaDZr--OdfE_xJ9PXmA-3vDhGGJxk/https/cdn.boob.bot/Gifs/17D0.gif?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/XLQZe2Fj1o5VbmYTfIcK2RODyL94oTRFAtvyE_aDZ-o/https/cdn.boob.bot/Gifs/164C.gif?width=270&height=157",
      "https://images-ext-2.discordapp.net/external/E8UeRy-IDncH8zw-Uq1TVtVcqplRYTD0z0DZNOn1Qjs/https/cdn.boob.bot/Gifs/16CC.gif?width=266&height=154",
      "https://images-ext-2.discordapp.net/external/IT1kisOa1Ei0nUBhbDvahj1NKA_Zzh1i_6puIGivx_4/https/cdn.boob.bot/Gifs/18ED.gif?width=360&height=194",
      "https://images-ext-2.discordapp.net/external/miKQ6CTlHv_crep0o4fj24wOGp73nbVdgiWHEqRQ77o/https/cdn.boob.bot/Gifs/162A.gif?width=360&height=196",
      "https://images-ext-2.discordapp.net/external/_jkDC-HOhvjWNzlBL8K5x7XexXy3Y4ctMgeo1_Fn2BI/https/cdn.boob.bot/Gifs/1732.gif?width=360&height=214",
      "https://images-ext-2.discordapp.net/external/Cri7koutukoGQkNSDXuA1giD7zpvoze7x8nOLtKH2sM/https/cdn.boob.bot/Gifs/169D.gif?width=360&height=163",
      "https://images-ext-1.discordapp.net/external/E6Txm3SedkPRELcJYl_0DSN2XmSGDyt_kzfnnBFEzvU/https/cdn.boob.bot/Gifs/184C.gif?width=360&height=198",
      "https://images-ext-1.discordapp.net/external/iU9tE48aQPs0z7wyFNm4_ApjQVcXc5pk3fS9MduYm6E/https/cdn.boob.bot/Gifs/1907.gif?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/w6wfxxUq-Bh4Wax-B3vaUXZ69h-lK7SltA2F1Fm0Z_c/https/cdn.boob.bot/Gifs/165C.gif?width=266&height=266",
      "https://images-ext-2.discordapp.net/external/-Dd0WpaIXGRyGnJu8y0d8UuEv0uu3iA-cSnD1h7t5Ns/https/cdn.boob.bot/Gifs/183B.gif?width=198&height=144",
      "https://images-ext-1.discordapp.net/external/NiVkOLQqyifg7HRbo51ZZ2vNt8vvIOcg6AxEbCjG1Ao/https/cdn.boob.bot/Gifs/191F.gif?width=360&height=205",
      "https://images-ext-1.discordapp.net/external/jXjjoZIKy-XKo5ljl1wbffa4x0HGu9M3f1v4E7MaPZU/https/cdn.boob.bot/Gifs/1652.gif?width=163&height=270",
      "https://images-ext-1.discordapp.net/external/1nXO_e3IiALgloi_ZJzVphanywrkvBuZ_F-8saEhveE/https/cdn.boob.bot/Gifs/184E.gif?width=270&height=270",
      "https://images-ext-1.discordapp.net/external/yvH2RL02NBl2fB9gb8G-36RVArvzam9MoToo8c6K2vs/https/cdn.boob.bot/Gifs/1844.gif?width=252&height=189",
      "https://images-ext-2.discordapp.net/external/242wLt8U5jUhUzK5JudLMh7OAslitYhS-yvPT-MkLcc/https/cdn.boob.bot/Gifs/17CA.gif?width=315&height=237",
      "https://images-ext-1.discordapp.net/external/pssoOEcHl33xN5LNHKXX8NohKrjYRLSE8iL37qWHxTw/https/cdn.boob.bot/Gifs/1993.gif?width=230&height=178",
      "https://images-ext-2.discordapp.net/external/LiWOxqXLR4o-i2adCcrMM2fHIVSuPJV-4EEEa4X-pso/https/cdn.boob.bot/Gifs/17AB.gif?width=360&height=168",
      "https://images-ext-1.discordapp.net/external/-QGzPZku0Y4lgmMKzb8ZCPrkCzjYS7Zb-xtuBZgnD_4/https/cdn.boob.bot/Gifs/1763.gif?width=360&height=168",
      "https://images-ext-2.discordapp.net/external/ol3Q6jfBiHCjfONYNVjRXPjjHrecke0j4RGoENffPAs/https/cdn.boob.bot/Gifs/174A.gif?width=360&height=195",
      "https://images-ext-2.discordapp.net/external/VB3lPP5sUbJ340fPgkffwoC8Eub6LPq4mvmvpdhkAZQ/https/cdn.boob.bot/Gifs/1894.gif?width=234&height=180",
      "https://images-ext-2.discordapp.net/external/RaM50A3n7yAJ8NYU37kxKv1T21oThCgSsBgcsU7sYPg/https/cdn.boob.bot/Gifs/1704.gif?width=292&height=211",
      "https://images-ext-1.discordapp.net/external/yXDv9Ejrs6tcniZr1P2pSH9ta7YRZPwv8fTis1ZVw0Y/https/cdn.boob.bot/Gifs/15EF.gif?width=266&height=128",
      "https://images-ext-1.discordapp.net/external/Ws-_dOMkqIvxfOvrE2gzSgHgZUMquM_hfW1snf8KrRs/https/cdn.boob.bot/Gifs/177C.gif?width=360&height=191",
      "https://images-ext-2.discordapp.net/external/MHx7fVqQlzqefYvsPFie1KPZYGrgfG-Q4Ij7VI8qKU0/https/cdn.boob.bot/Gifs/1996.gif?width=360&height=207",
      "https://images-ext-1.discordapp.net/external/KTgNfZm0Wl36wocvuCkvO_y5uHELNaz2NTS5pcuGb5M/https/cdn.boob.bot/Gifs/16F3.gif?width=360&height=194",
      "https://images-ext-2.discordapp.net/external/lFq539A3GsH-jZsr33ctOAf3--rN0GRaQPISV37m0-E/https/cdn.boob.bot/Gifs/1948.gif?width=360&height=200",
      "https://images-ext-2.discordapp.net/external/wiZJW_1GWpOp7WJLlcJFdEuzT6Ax3g8BftC_clo90kw/https/cdn.boob.bot/Gifs/1869.gif?width=360&height=203",
      "https://images-ext-1.discordapp.net/external/8kKO6FjNQg3aA_Hx0GGuJE584vXbatYoKuxZfyPp408/https/cdn.boob.bot/Gifs/198C.gif?width=324&height=202",
      "https://images-ext-2.discordapp.net/external/ax-xuHwP-M2QBKoJE4vnf9R_zHLeA-nATaN4FH5Kiz8/https/cdn.boob.bot/Gifs/1634.gif?width=360&height=168",
      "https://images-ext-2.discordapp.net/external/cq2ta5T7zk_pzBsBTZTurFDqFr0ezS0YEEoJJPm-vkQ/https/cdn.boob.bot/Gifs/17E0.gif?width=336&height=189",
      "https://images-ext-1.discordapp.net/external/bYHFoO0s1sLfaRT8DhTHzpLmo7O6XEaDRP46wOgi2s4/https/cdn.boob.bot/Gifs/1800.gif?width=360&height=198",
      "https://images-ext-2.discordapp.net/external/g-33qDok3MTn5vTqrutL0blbwIgRHxNGGUxD2kzyggo/https/cdn.boob.bot/Gifs/161B.gif?width=360&height=172",
      "https://images-ext-2.discordapp.net/external/Uh8DKxGmbE4XmM-KWtjK726j1PztFGx3muAXBs_Wvpc/https/cdn.boob.bot/Gifs/1835.gif?width=180&height=102",
      "https://images-ext-2.discordapp.net/external/Wb8mgoS-viaSqAFl4zOv4bT7Y4GuUuJFB9cVHvJizFo/https/cdn.boob.bot/Gifs/16C6.gif?width=180&height=139",
      "https://images-ext-2.discordapp.net/external/IjYdydCr2ahZNzmf1icteUUTeE1kPlbNNhtlsVQi9RA/https/cdn.boob.bot/Gifs/16A6.gif?width=360&height=197",
      "https://images-ext-1.discordapp.net/external/lYc-GLvaK5LCqS6oRWbPBc_M4eVncNSeHCmiyuOgQgg/https/cdn.boob.bot/Gifs/1737.gif?width=341&height=270",
      "https://images-ext-1.discordapp.net/external/4aUj24UAJkMfCUlU_txWLgxl5XI6axbkA-hBaLp0Z6o/https/cdn.boob.bot/Gifs/1963.gif?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/HBYjInKDGggSvKeiv7VJFSiwy1X5kz6nMaUvTRkKv-Q/https/cdn.boob.bot/Gifs/17F2.gif?width=360&height=144",
      "https://images-ext-2.discordapp.net/external/jLCCD1yxMLeNp9g0mtFiBHW90yFFi6p_dUve_4S2MCE/https/cdn.boob.bot/Gifs/174D.gif?width=170&height=270",
      "https://images-ext-2.discordapp.net/external/iwjAd2ArQcmsOqtU1g7TnUWqY8fqRyghLrkKe-wuoAA/https/cdn.boob.bot/Gifs/1637.gif?width=193&height=270",
      "https://images-ext-2.discordapp.net/external/Lvl2h2TOxjG-0iJ7CJndEY2Hzb04skuf8JO3OxlcSqQ/https/cdn.boob.bot/Gifs/16BC.gif?width=360&height=199"
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
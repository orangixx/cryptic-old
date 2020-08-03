const Discord = require("discord.js");

module.exports = {
name: "4k",
aliases: [],
category: "fun",
run: async (client, message, args) => {
  let disabled = 0;
    /*if (!args[0]) return message.reply("Mention someone to fuck!");*/

    const notnsfw = new Discord.MessageEmbed()
      .setTitle("NSFW not allowed here")
      .setDescription("Use NSFW commands in a NSFW marked channel")
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.imgur.com/oe4iK5i.gif");

    var subreddits = [
      "https://images-ext-1.discordapp.net/external/FgoGeeZi_dGNKDvKoe8_EMmEjmQSJJkrebZNs4vtSEI/http/i.imgur.com/obiANFF.jpg?width=332&height=498",
      "https://discordapp.com/channels/704356282081214505/704515203462725672",
      "https://images-ext-1.discordapp.net/external/6ChAhNkWyRiGlQazJE6efc_vH-OXD8nZD2FpDNcZkKM/https/i.imgur.com/JtasTof.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/hlqxWMv44UnV7-qk_jaCAC7wgYAPGIofLIvEpO7RGgs/https/i.imgur.com/yw9NT27.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/AKKdX9yENr4EKfaM6H6nQmm77RbuE78B2z-DsTAYQjw/https/i.imgur.com/23yzlf5.jpg?width=203&height=270",
      "https://images-ext-2.discordapp.net/external/2Q54qkuyENBbVfyAAto7Po6wQgv9cCfCbsFZbC7oHPY/http/i.imgur.com/2VVsnW4.jpg?width=360&height=260",
      "https://images-ext-1.discordapp.net/external/lpUvXN17ZhIZKM7AjrzFSN3GV7fdM49TJCD-gmxSEsg/http/i.imgur.com/QXaW1nj.jpg?width=360&height=225",
      "https://images-ext-2.discordapp.net/external/PNsnV-WUa9MkbQPOcsdByJ-xDBAOQZ12CUn52b86tgc/http/i.imgur.com/56Xibbg.jpg?width=360&height=202",
      "https://images-ext-2.discordapp.net/external/lSaLS8ekIcbbOyb2vJjJUU3zQ3oznsoxamgNwf2XGps/https/i.imgur.com/Fd8ev6p.jpg?width=203&height=270",
      "https://images-ext-1.discordapp.net/external/snNzBUCYQdNuRcBxs2BuAag4gKPYc1eakFAx2zmedZM/https/i.imgur.com/ZN6cvr5.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/Mmjhb-oEbcO3q0pl048MwHsBDaN_SG_REa9iEdApWfU/http/i.imgur.com/d9DNZbi.jpg?width=360&height=203",
      "https://images-ext-2.discordapp.net/external/OwV_HJWbtivWuKQqraW15wdzjqsTW3UDNqHHd5iqnzk/https/i.imgur.com/2jELbda.jpg?width=180&height=270",
      "https://images-ext-2.discordapp.net/external/iDyF2ZVXMMPiml9Z0tqZy9z-OK_dWKGuUfHfgM2hbpw/http/i.imgur.com/CazOj4o.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/SRk84nMeLGL4zgZcQbsi2oji71rVFdT33yHGkYiljKw/https/i.imgur.com/WGeRjyI.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/Vfqt3OHRxN8H2TPXHHDzSsC6C0S3Ds1VOY_qJPwlU34/https/i.imgur.com/YwLvj6z.jpg?width=359&height=270",
      "https://images-ext-1.discordapp.net/external/f8UKFHKadLIZJojkalGS7G4J-L-RS99GBHQUyG1Zw-Q/http/i.imgur.com/PJVXO1l.jpg?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/rY_iVzP7GX5rUZptXoPIER9lzRTHr7XJkabwTUJ8jGI/https/i.imgur.com/SvY2uwn.jpg?width=360&height=255",
      "https://images-ext-2.discordapp.net/external/M7zimb71_m79cAo9Qcrj9JNtnDusodfHM6cM8k6AJT4/https/i.imgur.com/KJVjXSU.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/yW7zOY2oF3YDP5DKCPMvqmfXIIBs8A3pa0JHZy-irkw/https/i.imgur.com/YsH4i11.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/M0OSHvE6MNFykwcVWfsd2CjQ1iRUfCIcskb_BRc-JEU/https/i.imgur.com/NTwqen2.jpg?width=359&height=270",
      "https://images-ext-2.discordapp.net/external/_TvjY1B2AnXik86hAirwWIIrhLjkBkvxXxQBJdCQm5o/http/i.imgur.com/fyMpDT6.jpg?width=202&height=270",
      "https://images-ext-1.discordapp.net/external/M1zVQhlS_NijhZ4CV5yv8UUL3qXPtIvs1PeTA28mQRU/http/i.imgur.com/xAZKTaP.jpg?width=180&height=270",
      "https://images-ext-1.discordapp.net/external/7R5buFjXRU1V19zodcmFC9FnFhfYK2mJqHZnCF6LlCk/https/i.imgur.com/FcmPFDB.jpg?width=360&height=240",
      "https://images-ext-2.discordapp.net/external/yc4kspq7nN236mqtoAhInKkVPPf5Y4PK2zzdT4WqHFE/https/i.redd.it/6h2ry2q8jts41.jpg?width=360&height=246",
      "https://images-ext-2.discordapp.net/external/fXswFBRV9Dy964W97rA7vLMCPinu1hg5OvD4HHvl_1I/http/i.imgur.com/VkXS7K8.jpg?width=360&height=225",
      "https://images-ext-2.discordapp.net/external/iBByls-Z0jaZhe42MXrebge6KvzHHnrZ-GqnV156zCI/https/i.imgur.com/RerFJNa.jpg?width=360&height=240",
      "https://images-ext-1.discordapp.net/external/E-ENmBvGtZ9q0uvp1guU_yUrXdwvQ7MjWApn9rQEGzg/https/i.imgur.com/NXGPpjJ.jpg?width=360&height=239",
      "https://images-ext-2.discordapp.net/external/XNqnY8URXD6ycS_CE21c-ABSRbI9W-QzbZNW8vMhPRg/http/i.imgur.com/GBZCKQh.png?width=360&height=225",
      "https://images-ext-1.discordapp.net/external/-D-Cf4f2Nv00nIUmECTrBHw9Og39IL9wtz8tX2vE9a8/https/i.imgur.com/xWU74gW.jpg?width=359&height=270",
      "https://images-ext-2.discordapp.net/external/t50FGyU8JkUNC1UGnF0esDJIY1TjHSsdGtzURQMztaY/https/i.imgur.com/xMkDKJc.jpg?width=360&height=255",
      "https://images-ext-1.discordapp.net/external/HlYalB6Z0x4dDUCxqxv3D6Ur20ACC1Nyi-2M9CnDQlE/https/i.redd.it/rrn816qym1m31.jpg?width=202&height=270"
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
}
const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args1) => {
  var replys = [
    "https://media.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.gif",
    "https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif",
    "https://media.giphy.com/media/wJNGA01o1Zxp6/giphy.gif",
    "https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif",
    "https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif",
    "https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif",
    "https://media.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif",
    "https://giphy.com/gifs/understand-hahahahah-E9oadOOmD27jG",
    "https://media.giphy.com/media/iBcLqvp8FMwy3AiPGY/giphy.gif",
    "https://media.giphy.com/media/Qjmp5vKEERPyw/giphy.gif",
    "https://media3.giphy.com/media/l4FGuhL4U2WyjdkaY/200w.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200w.webp",
    "https://media2.giphy.com/media/Qjmp5vKEERPyw/giphy.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=giphy.webp",
    "https://media0.giphy.com/media/26tknCqiJrBQG6bxC/200.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200.webp",
    "https://media1.giphy.com/media/ASzK5wWjMtc6A/200w.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200w.webp",
    "https://media2.giphy.com/media/E9oadOOmD27jG/giphy.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=giphy.webp",
    "https://media3.giphy.com/media/sUrqLJoLNpFa8/200w.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200w.webp",
    "https://media0.giphy.com/media/rzKSHEMN0lVkc/giphy.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=giphy.webp",
    "https://media1.giphy.com/media/xThuW0HziTz8RTMJ68/200.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200.webp",
    "https://media1.giphy.com/media/3oriO6a2KKLMej1GyQ/200w.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200w.webp",
    "https://media3.giphy.com/media/bXE0iECrH9xJe/200w.webp?cid=ecf05e475ad140aab5e3f6fa3645b22165b1e670a4eea8df&rid=200w.webp",
    "https://media0.giphy.com/media/z619OZp86JaBG/200w.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200w.webp",
    "https://media0.giphy.com/media/TH0TnF2UH1cgBw1DRZ/200w.webp?cid=ecf05e474e966014c958832c1d9a6f7fc23bc124567065f3&rid=200w.webp",
    "https://media2.giphy.com/media/l41YBIZiEdpI5nQys/200w.webp?cid=ecf05e474e966014c958832c1d9a6f7fc23bc124567065f3&rid=200w.webp",
    "https://media3.giphy.com/media/v7cQ1Zs7Xhvfq/200w.webp?cid=ecf05e474e966014c958832c1d9a6f7fc23bc124567065f3&rid=200w.webp",
    "https://media0.giphy.com/media/xT8qBvVrX0wuuItpFm/200w.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200w.webp",
    "https://media2.giphy.com/media/ySFtYLc51D3pK/200w.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200w.webp",
    "https://media1.giphy.com/media/xUOrw7KXaO2TdvdigM/200w.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200w.webp",
    "https://media1.giphy.com/media/JpRS9O2yE2UvV5vISR/200.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200.webp",
    "https://media3.giphy.com/media/BfrOzZpsjfuiQ/giphy.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=giphy.webp",
    "https://media2.giphy.com/media/l0MYIH1uwQf49mSFq/200w.webp?cid=ecf05e47312a54e6c35ebab9fdbdd288064499d42aae7088&rid=200w.webp",
    "https://media0.giphy.com/media/GS88vItcxOe2c/200.webp?cid=ecf05e47d1da80cac2fa33dad86abfcaa8c9a6b613827c88&rid=200.webp",
    "https://media0.giphy.com/media/VNF7YegY0DMwU/200w.webp?cid=ecf05e47d1da80cac2fa33dad86abfcaa8c9a6b613827c88&rid=200w.webp",
    "https://media3.giphy.com/media/XYkV3a7BIvZ0A/200.webp?cid=ecf05e47d1da80cac2fa33dad86abfcaa8c9a6b613827c88&rid=200.webp",
    "https://media2.giphy.com/media/xTiTnIKzo4rD2oGOJy/200w.webp?cid=ecf05e47139de21667e44e48616c1c2394cb6897acd1ca0d&rid=200w.webp",
    "https://media2.giphy.com/media/l0HlNNbOXaw9Ru7ni/200w.webp?cid=ecf05e476097101ef0384fce6296687afd12fbb6b10b6d80&rid=200w.webp",
    "https://media3.giphy.com/media/1dLuQ7C54cwGk/200w.webp?cid=ecf05e476097101ef0384fce6296687afd12fbb6b10b6d80&rid=200w.webp",
    "https://media2.giphy.com/media/ekRaXuI4tCGOs/200.webp?cid=ecf05e47a90754e9af672d8f30830150c2578dbad95b8dc5&rid=200.webp",
    "https://media2.giphy.com/media/ZLWeUFBmRNuIo/200w.webp?cid=ecf05e47a90754e9af672d8f30830150c2578dbad95b8dc5&rid=200w.webp",
    "https://media1.giphy.com/media/aKtApzd6XeN44/200w.webp?cid=ecf05e473954be93bea354eea4c71147982403f0739837c1&rid=200w.webp"
  ];
  var fs = require("fs");
    let gif = replys[Math.floor(Math.random() * replys.length)];
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("BLUE")
      .setImage(gif);

    message.channel.send(embed);
    console.log("Trump gif succesfully sent!");
};

module.exports = {
  name: "trump",
  category: "fun",
  description: "Get some trump gifs."
}
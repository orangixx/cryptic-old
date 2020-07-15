const { MessageEmbed } = require("discord.js");
const translate = require("@vitalets/google-translate-api");

const langs = [
  "afrikaans",
  "albanian",
  "amharic",
  "arabic",
  "armenian",
  "azerbaijani",
  "bangla",
  "basque",
  "belarusian",
  "bengali",
  "bosnian",
  "bulgarian",
  "burmese",
  "catalan",
  "cebuano",
  "chichewa",
  "corsican",
  "croatian",
  "czech",
  "danish",
  "dutch",
  "english",
  "esperanto",
  "estonian",
  "filipino",
  "finnish",
  "french",
  "frisian",
  "galician",
  "georgian",
  "german",
  "greek",
  "gujarati",
  "haitian creole",
  "hausa",
  "hawaiian",
  "hebrew",
  "hindi",
  "hmong",
  "hungarian",
  "icelandic",
  "igbo",
  "indonesian",
  "irish",
  "italian",
  "japanese",
  "javanese",
  "kannada",
  "kazakh",
  "khmer",
  "korean",
  "kurdish (kurmanji)",
  "kyrgyz",
  "lao",
  "latin",
  "latvian",
  "lithuanian",
  "luxembourgish",
  "macedonian",
  "malagasy",
  "malay",
  "malayalam",
  "maltese",
  "maori",
  "marathi",
  "mongolian",
  "myanmar (burmese)",
  "nepali",
  "norwegian",
  "nyanja",
  "pashto",
  "persian",
  "polish",
  "portugese",
  "punjabi",
  "romanian",
  "russian",
  "samoan",
  "scottish gaelic",
  "serbian",
  "sesotho",
  "shona",
  "sindhi",
  "sinhala",
  "slovak",
  "slovenian",
  "somali",
  "spanish",
  "sundanese",
  "swahili",
  "swedish",
  "tajik",
  "tamil",
  "telugu",
  "thai",
  "turkish",
  "ukrainian",
  "urdu",
  "uzbek",
  "vietnamese",
  "welsh",
  "xhosa",
  "yiddish",
  "yoruba",
  "zulu"
];

module.exports = {
  name: "translate",
  category: "miscellaneous",
  description: "Translates Texts",
  run: async (client, message, args) => {
    if (args[1] === "langs-list") {
      let index = 0;
      let langslist =
        "```Css\n" + langs.map((l, i) => `#${i + 1} - ${l}`).join("\n") + "```";
      message.author.send(langslist);
      return message.channel.send(
        "Check your DM for a list of supported languages!"
      );
    }

    let pWait = await message.channel.send("Please wait... translating...");

    if (!args[1]) {
      return pWait.edit("Error! Please provide a language to translate to!");
    }

    if (!args[1]) {
      return pWait.edit("Error! What do you want to translate?");
    }

    let language = args[1].toLowerCase();
    let toTranslate = args.slice(1).join(" ");

    if (!langs.includes(language)) {
      return pWait.edit(
        "This language is not supported! Please check your spelling!"
      );
    }

    let translated = await translate(toTranslate, { to: language });

    let resEmbed = new MessageEmbed()
      .setAuthor("Translator", message.client.user.displayAvatarURL)
      .addField(translated.from.language.iso, "```" + toTranslate + "```")
      .addField(language, "```" + translated.text + "```")
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL());

    return pWait.edit("", { embed: resEmbed });
  }
};

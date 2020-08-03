const request = require("request");

module.exports.run = (client, message, args) => {
  let disabled = 0;
  var fs = require("fs");
    request(
      "https://helloacm.com/api/fortune/",
      { json: true },
      (err, res, body) => {
        if (err) {
          console.error(err);
          return message.reply(
            "An error has occurred fetching your fortune. Error logged to console."
          );
        }
        message.reply(body);
      }
    );
};

module.exports = {
  name: "fortune",
  category: "miscellaneous"
}
const { Schema, model } = require("mongoose");

const Config = Schema({
    guildID: String,
    prefix: String
})

module.exports = model('settings', Config)
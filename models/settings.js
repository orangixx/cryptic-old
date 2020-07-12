const { Schema, model } = require("mongoose");

const Config = Schema({
    guildID: String,
    prefix: String,
    welcomemsg: String,
    welcome: Boolean,
    leavemsg: String,
    leave: Boolean,
    welcomechannel: String
})

module.exports = model('settings', Config)
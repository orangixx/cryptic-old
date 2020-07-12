const mongoose = require("mongoose");

const Config = mongoose.Schema({
    userID: String,
    guildID: String,
    level: Number,
    xp: Number,
    totalxp: Number,
    time: Date
})

module.exports = mongoose.model('level', Config)
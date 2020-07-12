module.exports = async (x) => {
    return {
        guildID: x,
        prefix: "c!",
        welcomemsg: "Welcome to {guildname}, {member}!",
        welcome: true,
        leavemsg: "Oh no {member} has left us in the dark!",
        leave: true,
        welcomechannel: "joins-and-boosts"
    }
}
const db = require('quick.db')// You Need to show it here also
const Discord = require('discord.js')
const ms = require("parse-ms")
const cooldown = new Set()
const cdseconds = 1200000;

module.exports.run = async(client, message, args) => {
  // Lets Start!
  
  let timeout = 1200000
  let sun = await db.fetch(`sun_${message.author.id}`)
  
  let work = await db.fetch(`work_${message.author.id}`)
  
  if(work !== null && timeout - (Date.now() - work) > 0) {
    let time = ms(timeout - (Date.now() - work))
    
    message.channel.send(`You can work again in ${time.hours}h ${time.minutes}m and ${time.seconds}s `)
    } if(!sun) {
  let maximumamount = "100" // here is the maximum amount we will get for doing work
  let money = db.fetch(`money_${message.author.id}`) // This Will Check If the User has money or not
  let random = Math.floor(Math.random()*maximumamount) // this will give us random amount of money within 100$
  if(!money) { // If We didn't start yet this will create an acc for us
    db.set("money_" + message.author.id, 1000+random)
    message.channel.send(`You worked and Got $${random}`)// this will be sent to channel
  } else { // if we already have worked then it will add money to our acc
    db.add("money_" + message.author.id, random)
    message.channel.send(`You worked and got $${random}`)
  } if(sun) {
        let maximum = "500"
         let money = await db.fetch(`money_${message.author.id}`)   
         let Random = Math.floor(Math.random()*maximum)
         db.add("money_" + message.author.id, Random)
        message.channel.send(`You got $${random} for working!`)
      db.set("work_" + message.author.id, Date.now())
      }
}
}

module.exports.help = {
  name: "work",
  aliases: ["w"]
}

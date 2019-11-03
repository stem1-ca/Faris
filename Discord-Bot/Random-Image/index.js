// Made by Faris & Fluffy

// Importing necessary libaries
const discord = require("discord.js")
const client = new discord.Client()
const fetch = require("node-fetch")
// Discord token
const token = "Add-Token-Here"

client.on("ready", () => {
    console.log("login")
})
// When player chooses rock and bot chooses scissor player wins
client.on("message", (message) => {
    if (message.content === "!help") {
        message.reply("Get Random Image")
    } else if (message.content.startsWith("!image")) {
    	console.log("Getting new image")
    }
})

client.login(token)

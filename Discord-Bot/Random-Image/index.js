// Made by Faris & Fluffy
// This is a Rock, paper,  Scissors discord bot made on November 2nd 2019!
// This code took two weeks to make.

// Importing necessary libaries

const discord = require("discord.js")
const client = new discord.Client()
const fetch = require("node-fetch")
// Discord token
const token = "NjQwMjE4NDg1MzE3OTU5NzEz.Xb2zog.tNcei55eK0b1UJVrOy0dJE47VhY"

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

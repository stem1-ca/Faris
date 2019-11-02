// Made by Faris & Fluffy
// This is a Rock, paper, Scissors discord bot made on November 2nd 2019!
// This code took two weeks to make.

// Importing necessary libaries

const discord = require("discord.js")
const client = new discord.Client()

// Discord token
const token = "Add-Token-Here"

client.on("ready", () => {
    console.log("login")
})
// When player chooses rock and bot chooses scissor player wins
client.on("message", (message) => {
    if (message.content === "!help") {
        message.reply("Type To play the game, type !start rock, !start paper, or start scissor! The bot will pick either rock, paper, or scissors. The bot will pick randomly so it is pretty hard to win. Anyways, enjoy!")
    } else if (message.content.startsWith("!start")) {
        var randomnumber = Math.floor(Math.random() * 3)
        console.log(randomnumber)
        const options = ["rock", "paper", "scissor"]
        // !start rock
        if (message.content.endsWith("rock") && randomnumber === 1) {
            message.reply("bot picked scissors! You won")
        }
        // !start paper
        else if (message.content.endsWith("paper") && randomnumber === 2) {
            message.reply("Bot picked rock! You won")
        }
        // !start sciss
        else if (message.content.endsWith("scissor") && randomnumber === 0) {
            message.reply("Bot picked paper! You won")
        } else {
            message.reply("You lost! Better luck next time. :(")
        }
        message.reply("Thanks for playing! :D")
    }
})

client.login(token)
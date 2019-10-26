const discord = require("discord.js")
const client = new discord.Client()
const token = "Add-Token-Here"

client.on("ready", () => {
    console.log("login")
})

client.on("message", (message) => {
    if (message.content === "!help") {
        message.reply("Type `!Start!` and then type in either Rock, paper, or Scissors and we can start playing!")
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
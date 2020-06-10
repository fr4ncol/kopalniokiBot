const { Client } = require("discord.js")
const chalk = require("chalk")
const { token } = require("./config/config.js")

const client = new Client()

const commandHandler = require("./commandHandler")


const log = console.log


commandHandler(client)


client.on("ready", () => {
    log(chalk.green(`Zalogowano jako ${client.user.tag}!`))

})

// Connect with Discord
client.login(token)

// Error handler - omit crashed
client.on("debug", () => { })
client.on("warn", () => { })
client.on("error", (msg) => { log(chalk.red(msg)) })
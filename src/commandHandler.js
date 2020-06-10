const { readdirSync } = require("fs")
const { prefix } = require(__dirname + "/config/config.js")
const { Collection } = require("discord.js")
const chalk = require("chalk")

const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (client) => {
    // Collections
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/commands").filter((file) =>
        file.endsWith(".js"),
    )

    for (const file of commandFiles) {
        const command = require(__dirname + `/commands/${file}`)

        if (command.name) {
            client.commands.set(command.name, command)
            table.addRow(file, "✅")
        } else {
            table.addRow(file, "❌  -> missing 'name'!")
            continue
        }
    }

    console.log(table.toString())

    client.on("message", (msg) => {
        if (msg.author.bot) {
            return
        }
        else {
            console.log(chalk.blue(msg.content + " | " + msg.author.tag))
        }
        const { author, guild } = msg

        // Check if user is a bot
        if (author.bot || !guild) {
            return
        }

        // Ignore messages without prefix
        if (!msg.content.startsWith(prefix)) return

        const args = msg.content
            .slice(prefix.length)
            .trim()
            .split(/ +/g)

        const cmd = args.shift().toLowerCase()

        // Check if commands exist
        if (!client.commands.has(cmd)) {
            msg.reply("Niestety nie ma takiej komendy.")
            return
        }

        try {
            client.commands.get(cmd).run(msg, args)
        } catch (error) {
            console.error(error)
            msg.reply("Wystąpił błąd krytyczny! Spróbuj ponownie.")
        }
    })
}



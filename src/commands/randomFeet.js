const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "stoopki",
    description: "Send random feet picture.",

    run: async (msg, args) => {
        const randomPuppy = require('random-puppy');
        const boardsArray = ["VerifiedFeet", "FootJewelry", "foot", "footfetishsnapchat", "feetpics", "FeetToesAndSocks", "CelebrityFeet"]
        async function randomFeet() {
            try {
                let img = await randomPuppy(boardsArray[Math.floor(Math.random() * boardsArray.length)])
                const embed = new MessageEmbed()
                    .setTitle("Twoje szczęśliwe stoopki!")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)

                msg.channel.send(embed)
            } catch (e) {
                console.error(chalk.red(e));
                msg.channel.send('Wystąpił błąd. Spróbuj ponownie.')
            }
        }

        randomFeet()
    },
}
const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "girl",
    description: "Send random girl picture.",

    run: async (msg, args) => {
        const randomPuppy = require('random-puppy');
        const boardsArray = ["gentlemanboners", "prettygirls", "GentlemanBonersGifs", "goddesses", "asiancuties", "thinspo"]

        try {
            let img = await randomPuppy(boardsArray[Math.floor(Math.random() * boardsArray.length)])
            const embed = new MessageEmbed()
                .setTitle("Masz stulejarzu!")
                .setColor(0x00695c)
                .setImage(img)
                .setURL(img)

            msg.channel.send(embed)

        } catch (e) {
            console.error(chalk.red(e));
            msg.channel.send('Wystąpił błąd. Spróbuj ponownie.')
        }

    },
}
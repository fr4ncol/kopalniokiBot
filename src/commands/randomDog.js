const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "pieseł",
    description: "Random dog command.",

    run: async (msg, args) => {
        async function randomDog() {
            try {
                const randomPuppy = require('random-puppy');
                let img = await randomPuppy()
                const embed = new MessageEmbed()
                    .setTitle("Pieseł na dziś")
                    .setColor(0x00695c)
                    .setImage(img);

                msg.channel.send(embed)

            } catch (e) {
                console.error(chalk.red(e));
                msg.channel.send('Wystąpił błąd. Spróbuj ponownie.')
            }
        }

        randomDog()
    },
}
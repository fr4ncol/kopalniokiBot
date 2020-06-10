const { MessageEmbed } = require("discord.js")
const chalk = require("chalk")

module.exports = {
    name: "kitku",
    description: "random cat command.",
    run: async (msg, args) => {
        async function randomCat() {
            try {
                const meow = require("random-meow");
                let img = await meow()

                const embed = new MessageEmbed()
                    .setTitle("Kitku na dziś!")
                    .setColor(0x00695c)
                    .setImage(img);
                msg.channel.send(embed)

            } catch (e) {
                console.error(chalk.red(e));
                msg.channel.send('Wystąpił błąd. Spróbuj ponownie.')
            }
        }

        randomCat()
    }
}
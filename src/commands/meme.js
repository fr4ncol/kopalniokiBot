const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "meme",
    desc: "memes from reddit",
    run: async (msg, args) => {
        const randomPuppy = require('random-puppy');
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle("Wprowadź nazwę subreddita")
                .setColor(0x00695c)
                .setDescription("Aktualnie dostępne subreddity:")
                .addFields(
                    { name: 'prequel', value: "/r/PrequelMemes" },
                    { name: 'surreal', value: "/r/surrealmemes" },
                    { name: 'dank', value: "/r/dankmemes/" },
                    { name: 'economy', value: "/r/MemeEconomy/" },
                    { name: 'art', value: "/r/Art" }

                )
            msg.channel.send(embed)

        }
        else {
            if (args[0] == 'prequel') {
                let img = await randomPuppy("PrequelMemes")
                const embed = new MessageEmbed()
                    .setTitle("Twój szczęśliwy mem")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)
                msg.channel.send(embed)

            }
            else if (args[0] == 'surreal') {
                let img = await randomPuppy("surrealmemes")
                const embed = new MessageEmbed()
                    .setTitle("Twój szczęśliwy mem")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)

                msg.channel.send(embed)

            }
            else if (args[0] == 'dank') {
                let img = await randomPuppy("dankmemes")
                const embed = new MessageEmbed()
                    .setTitle("Twój szczęśliwy mem")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)
                msg.channel.send(embed)

            }
            else if (args[0] == 'economy') {
                let img = await randomPuppy("MemeEconomy")
                const embed = new MessageEmbed()
                    .setTitle("Twój szczęśliwy mem")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)
                msg.channel.send(embed)

            }

            else if (args[0] == 'art') {
                let img = await randomPuppy("Art")
                const embed = new MessageEmbed()
                    .setTitle("Twój szczęśliwy mem")
                    .setColor(0x00695c)
                    .setImage(img)
                    .setURL(img)
                msg.channel.send(embed)

            }

            else {
                const embed = new MessageEmbed()
                    .setTitle("Wprowadzono złą nazwę subreddita")
                    .setColor(0x00695c)
                    .setDescription("Aktualnie dostępne subreddity:")
                    .addFields(
                        { name: 'prequel', value: "/r/PrequelMemes" },
                        { name: 'surreal', value: "/r/surrealmemes" },
                        { name: 'dank', value: "/r/dankmemes/" },
                        { name: 'economy', value: "/r/MemeEconomy/" },
                        { name: 'art', value: "/r/Art" }

                    )

                msg.channel.send(embed)

            }
        }



    }
}
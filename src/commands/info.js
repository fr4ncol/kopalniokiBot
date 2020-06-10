const { MessageEmbed } = require("discord.js")
const { botAuthor, botVersion, botName, botDesc } = require("../config/config.js")

module.exports = {
    name: "info",
    description: "Display bot info.",

    run(msg, args) {
        const embed = new MessageEmbed()
            .setTitle(botName)
            .setDescription(botDesc)
            .addFields(
                { name: 'author', value: botAuthor, inline: true },
                { name: 'version', value: botVersion, inline: true },

            )
            .setColor(0x00695c)
            .setFooter('W stopce powiem, że autor lubi stoopki');
        msg.channel.send(embed)
    },
}
const { quotes } = require("../values/quotes.js")

module.exports = {
    name: "quote",
    description: "Displays DNS famous quotes.",

    run(msg, args) {
        let arrayLenght = quotes.length
        msg.channel.send(quotes[Math.floor(Math.random() * arrayLenght)])
    },
}
const translate = require('@vitalets/google-translate-api');

module.exports = {
    name: "translate",
    description: "Text translation from polish to other language.",

    run: async (msg, args) => {

        let language = args[0]
        let avalaibleLanguages = ['en', 'de', 'fr', 'nl', 'es', 'sv']
        let isLanguageAvalaible = avalaibleLanguages.includes(language)

        if (isLanguageAvalaible == false) {
            msg.channel.send("Zły język lub składnia polecenia. Składnia powinna wyglądać '*translate język tekst'. Dostępne języki to: en - angielski, de - niemiecki, sv - szwedzki, nl - niderlandzki, fr - francuski, es - hiszpański")
        }

        else {

            let phrase = ""

            for (let i = 1; i < args.length; i++) {
                phrase = phrase + args[i] + ' '
            }


            translate(phrase, { from: 'pl', to: language }).then(res => {
                msg.channel.send(res.text)
                console.log(res.from.text.autoCorrected);
                console.log(res.from.text.value);
                console.log(res.from.text.didYouMean);
            }).catch(err => {
                console.error(err);
                msg.channel.send('Wystąpił błąd. Spróbuj ponownie.')
            })



        }

    }
}
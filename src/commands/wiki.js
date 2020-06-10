const fetch = require("node-fetch");

module.exports = {
    name: "wiki",
    description: "Wikipedia article search command.",
    run: (msg, args) => {

        let word = "";

        for (let i = 0; i < args.length; i++) {
            word = word + args[i] + '_'
        }

        let keyword = word.substring(0, word.length - 1);
        keyword = encodeURI(keyword)
        console.log(keyword)

        async function searchFunction(phrase) {

            let listSearchUrl = 'https://pl.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
            let readyListSearchUrl = listSearchUrl + phrase;
            let data = await (await fetch(readyListSearchUrl)).json()
            let id = data.query.search[0].pageid

            let articleSearchUrl = 'https://pl.wikipedia.org/w/api.php?action=query&format=json&prop=info&prop=extracts&exintro&explaintext&pageids=';
            let articleIdSearchUrl = articleSearchUrl + id
            let dataById = await (await fetch(articleIdSearchUrl)).json();
            let finalData = dataById.query.pages[id].extract

            if (finalData.length > 2000) {
                finalData = finalData.substring(0, 1999)
            }

            console.log(finalData.length)

            if (finalData == "") {
                msg.channel.send("Brak danych o danym artykule, spróbuj sprecyzować wynik.")
            }
            else {
                msg.channel.send(finalData)
            }
        }



        searchFunction(keyword);

    }
}
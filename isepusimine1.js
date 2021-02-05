const reader = require('readline-sync')

while (true) {
    let rida = reader.question("Kas sul lapsi on? ")

    if (rida == "jah") {
        console.log("Ilgelt n6me.")
        continue
    }

    if (rida == "ei") {
        console.log("Davai, sa oled normaalne tyyp. R22gime edasi.")
        break
    }

}

while (true) {
    let rida = reader.question("Kas sulle kassid meeldivad? ")

    if (rida == "jah") {
        console.log("Oh, sa oled mu uus lemmik inimene!")
        break
    } else if (rida == "ei") {
        console.log("K2i siis persse!")
        break
    } else if (rida == "ma ei tea") {
        console.log("No m6tle v2lja.")
        continue
    }


}
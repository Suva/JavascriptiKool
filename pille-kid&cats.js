const reader = require('readline-sync')

while (true) {
    let rida = reader.question("Kas sul lapsi on?")

    if (rida == "jah") {
        console.log("Ilgelt n6me")
        continue
    }
    if (rida == "ei") {
        console.log("Davai, sa oled normaalne tyyp. R22gime edasi.")
        break

    }
}

while (true) {
    let rida = reader.question("Aga kas sulle kassid meeldivad?")

    console.log(checkAnswer(rida))
}

function checkAnswer(rida) {
    if (rida == "jah") {
        return "Oh, sa oled mu lemmik inimene!"
    } else if (rida == "ei") {
        return "K2i persse, LOX!"
    } else if (rida == "ma ei tea") {
        return "No, mõtle välja"
    }
}

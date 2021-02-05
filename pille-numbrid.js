const reader = require('readline-sync')

while (true) {
    let p6hikysimus = reader.question("Kui palju sa palka saad?")

    let palk = parseInt(p6hikysimus)

    if (p6hikysimus === "mis see sinu asi on") {
        console.log("On ikka küll, kassid küsisid.")
        break
    }

    if (palk < 500) {
        console.log("Paras! Kelle kulul sa elad?")
    } else if (palk > 2500) {
        console.log("Tere, härra Urmas Sõõrumaa.")
    } else if (palk > 1500) {
        console.log("OMG, anneta kassidele siis.")
    } else if (palk > 1000) {
        console.log("Vapsjee rikkur, anna pappi!")
    } else if (palk > 500) {
        console.log("Kuidas sa hakkama saad?")
    }

}
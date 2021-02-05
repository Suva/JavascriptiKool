const reader = require('readline-sync')

while (true) {

let p6hikysimus = reader.question("Kui palju sa palka saad muidu? ")

    let palk = parseInt(p6hikysimus)

    if (p6hikysimus === "mis see sinu asi on") {
        console.log("Ega ei olegi. Sorri.")
        break
    }

    if (palk < 500) {
        console.log("Paras rott! Kelle kulul sa elad?")
    }
    else if (palk > 500, palk < 1000) {
        console.log("Saad ikka hakkama vä?")
    }
    else if (palk > 1000, palk < 1500) {
        console.log("Ei noh, Eesti keskmine on ka tore olla.")
    }
    else if (palk > 1500, palk < 2500) {
        console.log("Zajebis ju.")
    }
    else if (palk > 2500, palk < 10000) {
        console.log("Davai, tee laenu, ahv!")
    }
    else if (palk >= 10000) {
        console.log("Ah, hui usungi! Valevorst, raisk.")
        break
    }
}
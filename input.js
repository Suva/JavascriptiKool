const reader = require('readline-sync')

while (true) {
    let rida = reader.question("Ytle oma vanus: ")

    if (rida == "exit") {
        break
    }

    let vanus = parseInt(rida)

    if (vanus < 16) {
        console.log("Fuck off, sa pole piisavalt vana")
        continue
    }

    if (vanus == 16) {
        console.log("Okei, tegelt sa pole ikka veel piisavalt vana")
        continue
    }

    let vanus10AastaPärast = vanus + 10

    console.log("Sa oled 10 aasta pärast: " + vanus10AastaPärast)
}

console.log("END")
function makeFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName
    return fullName
}

const first = "Jaan-Juhan"
const last = "Pullerits"

const full = makeFullName(first, last) + " :)"

console.log(full)

//template literals

const name = "Rob"
const hello = `hello, ${name}`

console.log(hello)

//multline

const string = `It was a rainy day.
It was very rainy.
It was also warm`
console.log(string)

// ---- example2 ---- //
const newHTML = `
<div class="text">
    ${name}
</div>
`
console.log(newHTML)

//expression

const anExpression = `43 * 1902 = ${43 * 1902}`
console.log(anExpression)

// ---- example2 ---- //
let isMember = true
const aTernary = `Your price is ${isMember ? "$2.00" : "$4.00"}`
console.log(aTernary)

isMember = false
const aTernary2 = `Your price is ${isMember ? "$2.00" : "$4.00"}`
console.log(aTernary2)
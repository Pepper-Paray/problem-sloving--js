//Each guest gets 2 sandwiches. You have 12 guests.
//How many sandwiches do you need in total?
Guest = 12
sandwiches = 2
needed = (12 * 2)
console.log(
    "Guest:", Guest, "sandwiches", sandwiches, "needed:", needed
)
//You have $40. A movie ticket costs $9.50.
//How many full tickets can you buy, and how much money is left over?
//(Hint: use Math.floor() and %)
amount = 40
ticket = 9.50
Math.floor % (40 / 9.50);
moneyLeft = Math.round(amount / ticket)
console.log("amount:", amount, "ticket:", ticket, "moneyLeft:", moneyLeft)
//Convert a dog’s age to human years (1 dog year = 7 human years).
function humanYearsToDogYears(humanYears) {
    // The first two years of a dog's life count as 10.5 dog years each
    // After that, each human year counts as 4 dog years
    if (humanYears <= 2) {
        return humanYears * 10.5;
    } else {
        return 21 + (humanYears - 2) * 4;
    }
}

let humanYears = 5;
let dogYears = humanYearsToDogYears(humanYears);
console.log(`${humanYears} human years is approximately ${dogYears} dog years.`);
//Create 3 variables:

//• firstName

//• favoriteFood

//• hobby

//Print a sentence like:

//“Hi, my name is Alex. I love tacos and playing guitar.”
let firstName="Bug"
let favoriteFood="dumplings"
let hobby="models"
let sentence = `Hello, my name is ${firstName} and I love ${favoriteFood} and ${hobby}.`
console.log(sentence)
let readline = require('readline-sync');

let bill = readline.question('What is the bill? ');
let percentage = readline.question('What is the tip percentage? ');

let tips = (Number(bill) * Number(percentage)/100).toFixed(2)
let total = (Number(bill) + Number(tips)).toFixed(2);

console.log(`\nThe tip is $${tips}`);
console.log(`The total is $${total}`);
const rs = require('readline-sync');

function sum(num) {
    let result = 0;

    for (let idx = 1; idx <= num; idx++) {
        result += idx;
    }

    console.log(`The sum of the intergers between 1 and ${num} is ${result}.`)
}

function product(num) {
    let result = 1;
    
    for (let idx = 1; idx <= num; idx++) {
        result *= idx;
    }

    console.log(`The product of the intergers between 1 and ${num} is ${result}.`)
}

function intake() {
    let number = rs.question('Please enter a number greater than 0: ');
    let operation = rs.question('Enter "s" to compute the sum, or "p" to computethe product: ')

    if (operation === 's') {
        sum(Number(number));
    } else if (operation === 'p') {
        product(Number(number));
    }
}

intake();
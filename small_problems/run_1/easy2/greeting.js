const rs = require('readline-sync');

function greetings(nameArr, occupObj) {
    let name = nameArr.join(' ');
    let job = occupObj['title'] + ' ' + occupObj['occupation'];

    console.log(`Hello, ${name}! Nice to have a ${job} around.`)
}

function greetingName() {
    let name = rs.question('What is your name? ')

    if (name[name.length - 1] === '!') {
        name = name.slice(0, -1);
        console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
    } else {
        console.log(`Hello ${name}.`);
    }
}

greetingName();
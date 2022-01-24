function utf16Value(input) {
    let split = input.split('');
    let value = 0;

    split.forEach(char => {
        value += char.charCodeAt();
    })

    return value;
}

console.log(utf16Value('Launch School'));
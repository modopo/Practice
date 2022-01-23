function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    }

    return true;
}

function logOdd() {
    for (let idx = 0; idx <= 99; idx++) {
        if (idx % 2 !== 0) {
            console.log(idx)
        }
    }
}

logOdd();
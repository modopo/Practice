function multisum(number) {
    let result = 0;

    for (let idx = 1; idx <= number; idx++) {
        if (idx % 3 === 0 || idx % 5 === 0) {
            result += idx;
        }
    }

    return result;
}

console.log(multisum(20));
var moveZeros = function (arr) {
    let count = 0
    arr.forEach(entry => {
        if (entry === 0) {
            count++;
        }
    })

    arr = arr.filter(entry => {
        if (entry !== 0) {
            return entry;
        }
    })

    for (let idx = 0; idx < count; idx++) {
        arr.push(0);
    }

    return arr;
}

console.log(moveZeros(["a","b","c","d",1,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]));
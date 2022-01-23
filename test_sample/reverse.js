function reverse_array(arr) {
    let result = [];
    
    for (let idx = arr.length - 1; idx >= 0; idx--) {
        result.push(arr[idx]);
    }

    return result;
}

console.log(reverse_array([1,2,3,4,5]));
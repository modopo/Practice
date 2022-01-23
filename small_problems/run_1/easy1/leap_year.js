function leap(year) {
    if (year < 1752) {
        return year % 4 === 0;
    }
    
    if ((year % 100 === 0) && !(year % 400 === 0)) {
        return false;
    }

    return year % 4 === 0;
}

console.log(leap(100));
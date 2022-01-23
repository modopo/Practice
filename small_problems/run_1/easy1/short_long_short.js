function shortLongshort(str1, str2) {
    if (str1.length > str2.length) {
        return str2.concat(str1, str2);
    } else {
        return str1.concat(str2, str1);
    }
}

console.log(shortLongshort('testingall the test', 'testing'));
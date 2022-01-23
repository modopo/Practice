let readline = require('readline-sync');

const METERS_TO_FEET = 10.7639;

let length = readline.question('Enter the  length of the room in meters: \n');
let width = readline.question('Enter the width of the room in meters: \n');

let area = Number(length) * Number(width);
let areaFeet = (area * METERS_TO_FEET).toFixed(2);

console.log(`The area of the room is ${area.toFixed(2)} square meter (${areaFeet} square feet)`)
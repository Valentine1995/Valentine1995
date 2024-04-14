const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
banana + grape
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
let result = performOperation(getRandomNumber(), getRandomNumber());

kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple


const reverseWords = str => str.split(" ").reverse().join(" ");
console.log(getRandomString());
32,45,23,99,86,0,96,14,69,75,68,24,98,16,89,2,94,50,11,64,51,82,51,35,70,48,16,96,0,29,68,96,55,25,30,49,32,22,42,21,97,84,41 * 3
class MyClass { constructor() { this.property = getRandomString(); } }
apple - true
const isPalindrome = str => str === str.split("").reverse().join("");

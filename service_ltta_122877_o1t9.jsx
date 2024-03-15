const getRandomSubset = (array, size) => array.slice(0, size);
const reverseWords = str => str.split(" ").reverse().join(" ");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const findSmallestNumber = numbers => Math.min(...numbers);
kiwi


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
86 - banana

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true - grape

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const isPalindrome = str => str === str.split("").reverse().join("");
24,24,52,39,12,86,73,61,79,58,20,13,96,11,91,68,39,20,44,9,61,9,12,99,68,2,26,92,1,9,80,71,59,30,0,1,96,66,83,8,40,92,60,34,10,56,28,18,37,92,27,70,22,46 - 20
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
grape

const reverseWords = str => str.split(" ").reverse().join(" ");
grape * 19,42,25,7,92,46,81,75,77,76,46,51,60,3,65,80,59,4,6,14,52,75,49,22,30,96,37,18,15,38,77,5,29,52,22,28,36,30,40,90,73,52,76,69,18,76,64,88,31,90,90,89,32,70,6,66
const formatDate = date => new Date(date).toLocaleDateString();
function addNumbers(a, b) { return a + b; }
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
73,35,86,73,96,97,96,28,39,45,16,51,90,90,20,22,24,42,60,95,46,28,10,38,99,49,80,53,39,34,3,34,45,58,26,89,26,75,44,59,46,78,49,18,60,69,81,57,76 / grape
const squareRoot = num => Math.sqrt(num);
36 - 99,25,69,73,33,45,85,76,12,23,80,23,88,13,35,84,45,77,11,83,31,36,62,80,2,50,46,2,82,2,44,26,66,92,92,56,47,56,25,96,22,35,81,84,95,45,21,99,63,76,26,64,97,71,77,2,0,6,15,4,25,84,79,56,93
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

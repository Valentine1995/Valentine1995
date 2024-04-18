const findLargestNumber = numbers => Math.max(...numbers);
banana

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
kiwi

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
false - 91,58,98,25,19,17,45,48,10,76,81,36,54,27,38,26,41,79,1,80,53,81,36,87,67,14,7,6,5,59,13,91,80,35,71,96,58,65,54,87,83,44,88
const filterEvenNumbers = numbers => numbers.filter(isEven);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

//MAP-the number of input and output are same but will be different
let numbers=[1,2,4,7,6,3,10];
console.log(`numbers are as follows:${numbers}`);
let doubled=numbers.map(num=>num*2);
console.log(`doubled numbers are as follows:${doubled}`);
let squared=numbers.map(num=>num**2);
console.log(`squared numbers are as follows:${squared}`);
let names=['sai','kumar','reddy','sandy','murty','rick'];
console.log(`names are as follows:${names}`);
let upperCaseNames=names.map(name=>name.toUpperCase());
console.log(`names in uppercase are as follows:${upperCaseNames}`);
// Changing names to camelCase
let normalName = ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma"];
console.log(`Normal Names: ${normalName}`);
let camelCase = normalName.map(names => {
    return names.toLowerCase().split(' ')
                .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
});
console.log(`Names in camelCase: ${camelCase}`);

//FILTER
let num=[1,2,4,7,6,3,10];
console.log(`numbers are as follows:${num}`);
let even=num.filter(num=>num%2==0);
console.log(`even numbers are as follows:${even}`);
let odd=num.filter(num=>num%2!=0);
console.log(`odd numbers are as follows:${odd}`);
let moreThan4=num.filter(num=>num>4);
console.log(`numbers more than 4 are as follows:${moreThan4}`);
let words=["Alphabet","Autonomous","Bibliography","Caterpillar","Doodle","Dedication"];
console.log(` Original words are as follows:${words}`);
let wordsWithA=words.filter(word=>word.startsWith('A'));
console.log(`words starting with A are as follows:${wordsWithA}`);
let longWords=words.filter(word=>word.length>10);
console.log(`words with length more than 10 characters:${longWords}`);

//REDUCE
let randomNumbers=[1,7,11,15,23,27,34];
console.log(`random numbers are as follows:${randomNumbers}`);
let sumOfNumbers=randomNumbers.reduce((total,number)=>total + number,0);//total=total+number
console.log(`sum of numbers is as follows:${sumOfNumbers}`);
let productOfNumbers=randomNumbers.reduce((product,number)=>product * number,1);//product=product*number
console.log(`product of numbers is as follows:${productOfNumbers}`);
let largeNumber = randomNumbers.reduce((max, number) => Math.max(max, number), randomNumbers[0]);
console.log(`Largest number: ${largeNumber}`);
let smallNumber = randomNumbers.reduce((min, number) => Math.min(min, number), randomNumbers[0]);
console.log(`Smallest number: ${smallNumber}`);
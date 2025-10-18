let FullName="rohith r";
console.log(`my name is ${FullName}`);
//length
console.log(`length of ${FullName}:${FullName.length}`);
//toUpperCase
console.log(`upper case:${FullName.toUpperCase()}`);
//toLowerCase
console.log(`lower case:${FullName.toLowerCase()}`);
//to access the character we can use the index
console.log(`${FullName[0]} is present at first index`);
console.log(`${FullName[3]} is present at third index`);
//we can use charAt method as well
console.log(`${FullName.charAt(2)} is present at second index`);
let sentence = `We are learning the Frontend concepts like HTML, CSS, JS & React. The bootstrap is used for making the responsive websites.`;
console.log(`${sentence}`);
// indexOf("word") is used to check the index of the given word
console.log(`Frontend word is present at: ${sentence.indexOf("Frontend")} position`);
// first position
console.log(`"the" word is present at: ${sentence.indexOf("the")} position`);
// last position
// lastIndexOf("word") is used to check the index of the given word
console.log(`"the" word is present at: ${sentence.lastIndexOf("the")} position`);
// startsWith() method is used to check whether the string starts with given word
console.log(`Sentence starts with "We"? ${sentence.startsWith("We")}`);
console.log(`Sentence starts with "The"? ${sentence.startsWith("The")}`);
console.log(`Sentence ends with "."? ${sentence.endsWith(".")}`);
console.log(`Sentence ends with "websites"? ${sentence.startsWith("websites")}`);
// trim() method is used to remove the whitespaces
let word = "   City Engineering College   ";
console.log(`Original Word: ${word}`);
console.log(`Removed whitespace at the beginning: ${word.trimStart()}`);
console.log(`Removed whitespace at the end: ${word.trimEnd()}`);
console.log(`Removed whitespace from the word: ${word.trim()}`);
// First occurence will be replaced when replace() method is used
// Syntax: replace("old", "new")
let sentence1 = "I'm studying in 3rd Sem. I'm learning the Frontend concepts. I'm working on the mini project."
console.log(`Original Sentence: ${sentence1}`);
console.log(`Modified Sentence: ${sentence1.replace("I'm", "We're")}`);
console.log(`Modified Sentence: ${sentence1.replaceAll("I'm", "We're")}`);




const name ="javascript"
const age = 14

console.log(`my name is ${name} my age is ${age}`);

const gameName = new String('javascript'); //another way to declare string
console.log(gameName[2]);                  // index access
console.log(gameName.length);
console.log(gameName.toUpperCase());       
console.log(gameName.charAt('7'));

// string slicing

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// trim 

const thirdString = "        javascript"
console.log(thirdString);
console.log(thirdString.trim());

// replace
const url = "httos://www.googlebaba.com/javascript%20notes"
console.log(url.replace('%20', '-'));




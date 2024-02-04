// immediately invoked function expressions (IIFE)

(function test(){
    console.log(`DB CONNECTED`);
})();                             // ; dont forget this if your written 2 iife in one file

// arrow function IN IIFE
// unnamed iife

( () => {
    console.log(`DB CONNECTED TWO `);
})();

// parameter pass in iife
( (name) => {
    console.log(`DB CONNECTED . NAME IS : ${name}`);
})('index-page')


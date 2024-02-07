// for-of loop 

//basic 1 
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
//2 
// const greetings = "hlelo world"
// for (const greet of greetings) {
//     console.log(greet);
// }

// for-of on Maps
const map = new Map()
map.set('IN',"india")
map.set('Fr',"France")
map.set('brasil',"br")
//console.log(map);
for (const [key,value] of map) {
    console.log(key , ":-", value);  
}

const marvel_heros = ["thor", "ironman", "captain"]
const dc_heros = ["superman", "flash", "batman"]



// merge two  array

marvel_heros.push(dc_heros)    //push
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)   // concat
console.log(all_heros);



const all_new_heros = [...marvel_heros, ...dc_heros]  // spread
console.log(all_new_heros);


console.log(Array.isArray("javascirpt"));   // convert string into array
console.log(Array.from("javascirpt"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
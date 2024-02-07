// reduce

// const myNums = [1,2,3,4]
// const Mytotal = myNums.reduce( function (acc, currentval){
//     console.log(`acc : ${acc} and currentVal : ${currentval}`);      // just for understanding
//     return acc +currentval
//  }, 0)
//  console.log(Mytotal);

// with arrow funtion
// const myNums = [1,2,3,4]
// const Mytotal = myNums.reduce( (acc ,currentVal) =>  acc + currentVal,0)
// console.log(Mytotal);


// shopping card example
const shoppingcart = [
    {
        itemName : "rice",
        price : 100
    },
    {
        itemName : "cup",
        price : 250
    },
    {
        itemName : "teaPack",
        price : 150
    },
    {
        itemName : "butter",
        price : 80
    },
]
const Mytotal = shoppingcart.reduce( (acc,item) => acc + item.price ,0)
console.log(Mytotal);


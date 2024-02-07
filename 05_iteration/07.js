//map

// const myNums = [1,2,3,4,5,6,7,8,9,10] 
// const numAfterAdd = myNums.map( (num) =>  num + 10)   
// console.log(numAfterAdd);

// chaining 

const myNums = [1,2,3,4,5,6,7,8,9,10] 
const newNUM = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 2)
                .filter( (num) => num <= 55)

    console.log(newNUM);


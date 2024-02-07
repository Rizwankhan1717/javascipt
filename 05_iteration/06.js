// for-each loop does not return any value.

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const returnNUM = myNums.filter((num) =>  num < 5)
// console.log(returnNUM);

// const returnNUM = myNums.filter((num) => {
//     return num > 5                           // note we use {} than we need return the value
// })
// console.log(returnNUM);



// example 
const books = [
    { title : 'book One', genre :'fiction', publish : 1981, edition : 2004},
    { title : 'book two', genre :'history', publish : 1983, edition : 2001},
    { title : 'book three', genre :'non-fiction', publish : 1980, edition : 2011},
    { title : 'book four', genre :'Science', publish : 1988, edition : 2009},
    { title : 'book five', genre :'fiction', publish : 1990, edition : 2015},
    { title : 'book six', genre :'history', publish : 1969, edition : 2013},
    { title : 'book seven', genre :'non-fiction', publish : 1999, edition : 2017},
    { title : 'book eight', genre :'Science', publish : 1989, edition : 2007},
    { title : 'book nine', genre :'Science', publish : 1979, edition : 2010},
]
// const userbooks = books.filter( (bk) => bk.genre === 'history')
// console.log(userbooks);

//same operation with scope{}
// const userbooks = books.filter( (bk) => { return bk.genre === 'history'})
// console.log(userbooks);

// another use case 
const userbooks = books.filter( (bk) => bk.publish <= 2000 )
console.log(userbooks);

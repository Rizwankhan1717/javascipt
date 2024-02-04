//5 rest operator in function
function calculateCartPrice(...num){
    return num
}

//console.log(calculateCartPrice(200,100,50,350));


// 6 object in function

const user ={
    itemname : "mango",
    price : 150
}
function handleObject(anyobject){
    //console.log(`iteamname is ${anyobject.itemname} and price is ${anyobject.price}`);
}
handleObject(user)
// we can also pass obj like this
handleObject({
    itemname : "kitkat",
    price : 20
})


// 7 array in funtion 

const newArray = [100,200,300,400]

function returnthirdArray(getArray){
    return getArray[2]
}
console.log(returnthirdArray(newArray));
console.log(returnthirdArray([1,2,3,4]));

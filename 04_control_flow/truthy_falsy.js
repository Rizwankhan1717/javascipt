// empty array is truthy
const userEmail =[]

if(userEmail.length === 0){
    console.log("arry is empty");
}

// empty object
const emptyobj ={}
if (Object.keys(emptyobj).length === 0){
    console.log("object is empty");
} else{
    console.log("object is not empty");
}

// ternaary operator
// condition ? ture : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

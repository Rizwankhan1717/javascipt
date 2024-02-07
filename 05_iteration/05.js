//for Each loop

const coding =["js","python","ruby","java","cpp"]

// coding.forEach(function(item){                     // callback function
//     console.log(item);
// })

// for Each loop on arrow fn
// coding.forEach((val) => {
//     console.log(val);
// })

// outside dec
// function Printme(val){
//     console.log(val);
// }
// coding.forEach(Printme)


// multiple access
// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

// obejct in array  //imp

const MyCoding = [
    {
        languageName : "JavSciprt",
        languagefileName : "js"
    },
    {
        languageName : "python",
        languagefileName : "py"
    },
    {
        languageName : "java",
        languagefileName : "java"
    },
]
MyCoding.forEach( (val) => {
    console.log(val.languagefileName);
})


//const tinderUser = new object()  // single ton obj dec

// basic one
const tinderUser = {}

tinderUser.id = "JS123"
tinderUser.name = "javaScript"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// nested obj 
const regularuser = {
    email : "js17@gmail.com",
    username : {
        fisrtname : "tony",
        lastName : "stark"
    }
}
//console.log(regularuser.username);


// combained two object

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
//const combainedObj3 = Object.assign({},obj1,obj2)   // (source , object)
//console.log(combainedObj3);

const Obj3 = {...obj1,...obj2}    //combained two object using spread 
//console.log(Obj3);


// object in array 

const user =[
    {
        id :1,
        email : "js@gmail.com"
    },
    {
        id :2,
        email : "dc@gmail.com"
    },
    {
        id :3,
        email : "mv@gmail.com"
    }
]
//console.log(user[0].email);

//*************** */
const instaUser = {}

instaUser.id = "js141"
instaUser.name = "javaScript"
instaUser.LoggedIn = false

//console.log(instaUser);
//console.log(Object.keys(instaUser));
//console.log(Object.values(instaUser));
//console.log(Object.entries(instaUser));

//console.log(instaUser.hasOwnProperty('name')); 


//object de-structure/

const course = {
    coursename: "javascript",
    price : "999",
    courseinstructer : "HC"
}
console.log(course.courseinstructer);
// instead of this we can use like 

const { courseinstructer : guide} = course  // if we need to print multiple time , so we can use this 
console.log(guide);















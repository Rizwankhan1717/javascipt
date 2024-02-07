// for loop
//for (let i = 0; i < 10; i++) {
//    const element = i;
//    if (element == 5) {
//      console.log("5 is best element"); 
//    }
//    console.log(element);
//}

// nested
//for(let i =0; i <= 10; i++){
    //console.log(`outer loop value ${i}`);
//    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop value ${j} and outer loop value is ${i}`);
//    }
//}

// array in for loop
//let Myarray = ["flash", "batman", "superman"]
//console.log(Myarray.length);
//for (let i = 0; i < Myarray.length; i++) {
//    const element = Myarray[i];
//    console.log(element);   
//}

// break & continue 

// break 
//  for (let i = 1; i < 20; i++) {
//      if ( i === 5) {
//          console.log("5 is detected");
//          break 
//      }
//      console.log(`the value of i is ${i}`); 
//  }

// continue
for (let i = 1; i < 20; i++) {
    if ( i === 5) {
        console.log("5 is detected");
        continue 
    }
    console.log(`the value of i is ${i}`); 
}

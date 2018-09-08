let arr = [1,2,3,4];
// console.log(arr);
let arr2= [1,"abhishek",2,[1,2,3,4],{a:10}];
// console.log(arr2);

// for(let i=0;i<arr2.length;++i){
//     console.log(arr2[i]);
// }

//for of loop

// for(let val of arr2){
//     console.log(val)
// }

//for in loop
// for(let index in arr2){
//     console.log(arr2[index]);
// }


let names=["Abhishek","Satyendra","Wasim","Saksham"];

// names.push("anshul");
// console.log(names);
//
// names.pop();
// console.log(names);
//
// names.shift();
// console.log(names);
//
// names.unshift("Saksham","abcd");
// console.log(names);

//Slice

// let newarr=names.slice(0,2);
// console.log(newarr);
// console.log(names);

//Splice is destructive
let splicedArray = names.splice(0,2,"newname","newname2");
console.log(splicedArray);
console.log(names);
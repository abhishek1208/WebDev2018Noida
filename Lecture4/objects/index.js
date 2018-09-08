let obj={
    a:1,
    b:"name",
    c:function () {
        console.log("I am in the object function")
    }
}
obj.c();
console.log(obj.b);

obj.d=10;
console.log(obj.d)

/* Call by value*/


let name="Abhishek";

function greetMe(passedName){
    passedName="Satyendra";
    console.log(passedName);
}

greetMe(name);

console.log(name);


let names={
    name1:"abhishek",
    name2:"satyendra"
};


function changeTheNames(passedObject){
    let newObj={
        name1:"abc",
        name2:"def"
    };
    passedObject=newObj;
    // passedObject.name1="wasim";
    // passedObject.name2="anshul";

}
console.log(names);
changeTheNames(names);
console.log(names);
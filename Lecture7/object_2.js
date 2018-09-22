let person={
    name:"Abhishek",
    age:15,
    checkAge: function () {
        console.log(this.age>18);
    },
    printName: function () {
        console.log("My name is "+ this.name);
    }
}

person.checkAge();
person.printName()
function Person(fname,lname,age){

    this.printfName=function(){
        return (fname)
    }

    this.printlName=function () {
        return (lname)
    }

    this.printAge=function () {
        return (age)
    }

}

let p=new Person("abhishek","yadav",30);
console.log(p.printfName());
console.log(p.printlName());
console.log(p.printAge());

console.log(p.fname);
console.log(p.lname);
console.log(p.age);

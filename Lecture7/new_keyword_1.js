function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
    console.log(global.fname===fname);
    return 10;
}

let p1=new Person("Abhishek","Yadav");
let p2=new Person("John","Doe");
let p3 = Person("Third","Person");



console.log(p1.fname);
console.log(p2.fname);
console.log(p3.fname)


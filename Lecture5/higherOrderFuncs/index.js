function myFirstName(str){
   return str.split(" ")[0];
}

function greetMe(findName,fullName){
    let name = findName(fullName);
    console.log("Hello"+ name);
}

greetMe(myFirstName,"Abhishek Yadav");
function fun(x,y,z){
    return x+y+z;
}


let result=fun(1,2,3);
console.log(result);


function func1(){
    let m=function () {
        console.log('I am in the returned function');
    };
    return m;
}


let retVal=func1();
retVal();



function func2() {
    console.log("I am in the passed function")
}

function func3(passedFunc){
    passedFunc();

}

func3(function(){
    console.log("Hi! I am passed while calling")
});
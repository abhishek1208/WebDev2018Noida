let arr=[3,5,6,1,2,8,12];

function compare(a,b){
    return a-b;
}

console.log(arr.sort(compare));


let newArr=arr.map(function (val) {

    return val*100;
})

console.log(newArr);


let newArr2=arr.filter(function (val) {
    return (val%3==0);
})

console.log(newArr2);

let newArr3=arr.reduce(function (acc,item) {
    return acc+item;
})

console.log(newArr3);


let strArray=["Sam","ab","a","James","bd","Jack"];
function createCounter (initialValue, delta) {
    let val = initialValue;
    function counter() {
        val = val + delta;
        return val;
    }
    return counter;
}


let twoCounter=createCounter(10,2);

console.log(twoCounter());
console.log(twoCounter());
console.log(twoCounter());


let sevenCounter = createCounter(10,7);
console.log(sevenCounter());
console.log(sevenCounter());
console.log(sevenCounter());


console.log(twoCounter());
console.log(twoCounter());
console.log(twoCounter());
function createCounter(initValue, delta){
    let val=initValue;
    console.log(val);
    let counterObj={
        incr:function () {
            val=val+delta;
            console.log("The value in incr func "+val);
        },
        decr:function () {
            val=val-delta;
            console.log("The value in decr func "+val);

        },
        getValue:function () {
            return val;
        }
    }

    return counterObj;

}

let twoCounter=createCounter(10,2);
twoCounter.incr();
twoCounter.incr();
console.log(twoCounter.getValue());
twoCounter.decr();
console.log(twoCounter.getValue());
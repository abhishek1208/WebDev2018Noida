function asyncFunction(done){
    console.log("The async function has started!");
    setTimeout(function () {
        console.log("End of async function");
        done();
    },3000);
}

let taskPromise = function () {
    return new Promise(function (resolve,reject) {
        asyncFunction(resolve);
    })
}


// asyncFunction(function () {
//     console.log("The callback was called!")
// })

taskPromise()
    .then(function () {
        console.log("The callback has called!")
    })
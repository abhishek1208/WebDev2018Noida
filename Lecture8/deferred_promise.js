function download() {
    return new Promise(function (resolve, reject) {
        console.log("The downloading has started!");
        setTimeout(function () {
            console.log("The downloading has completed!")
            resolve();
        }, 4000);

    })
}


let promisObj = download();
setTimeout(function () {
    promisObj.then(function () {
        console.log("4 seconds have passed after download");
    })
},8000)


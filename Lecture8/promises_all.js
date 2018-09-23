function downloadFile(url) {
    return new Promise(function (resolve, reject) {

        if (!url.startsWith('http')) {
            return reject(new Error("The url does not start with HTTP!"))
        }

        console.log("The downloading has started at " + url);
        //Fake time delay of 3secs
        setTimeout(function () {
            let downloadPath = "/Users/AbhishekYadav/Desktop/" + url.split('/').pop();
            console.log("The downloading has been completed!")
            resolve(downloadPath);
        }, 3000);
    })

}

function resize(filePath) {

    return new Promise(function (resolve, reject) {

        if (!filePath.endsWith('jpg')) {
            return reject(new Error("File does not have a jpg extension"))
        }

        console.log("Resizing has started of file at " + filePath);
        setTimeout(function () {
            let resizedFilePath = filePath.split('.')[0] + "-resized." + filePath.split('.')[1];
            console.log("The resizing has been completed!");
            resolve(resizedFilePath)
        }, 5000);
    })

}

function upload(filePath) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading has started of file at " + filePath);
        setTimeout(function () {
            let uploadPath = "https://mysite.com/uploads/" + filePath.split('/').pop();
            console.log("The uploading has been completed!");
            resolve(uploadPath);
        }, 8000);
    })

}

Promise.all([
    downloadFile("https://mysite.com/random.jpg"),
    downloadFile("https://mysite.com/avengers.jpg"),
    downloadFile("https://mysite.com/titanic.jpg")

])
    .then(function (downloadValues) {
        return Promise.all(downloadValues.map(resize))
    })
    .then(function (resizeValues) {
        return Promise.all(resizeValues.map(upload))
    })
    .then(function (uploadValues) {
        console.log(uploadValues)
    })

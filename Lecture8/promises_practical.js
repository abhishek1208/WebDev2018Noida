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


downloadFile("https://mysite.com/logo.png")
    .then(function (downloadResult) {
        console.log("The download path is " + downloadResult);
        return resize(downloadResult);
    })
    .then(function (resizedPath) {
        console.log("The resized path is " + resizedPath);
        return upload(resizedPath);
    })
    .then(function (uploadPath) {
        console.log("The upload path is " + uploadPath);
    })
    .catch(function (err) {
        console.log(err);
    })

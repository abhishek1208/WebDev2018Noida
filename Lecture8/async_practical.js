function downloadFile(url, done) {
    console.log("The downloading has started at " + url);

    //Fake time delay of 3secs
    setTimeout(function () {
        let downloadPath = "/Users/AbhishekYadav/Desktop/" + url.split('/').pop();
        console.log("The downloading has been completed!")
        done(downloadPath);
    }, 3000);
}

function resize(filePath, done) {
    console.log("Resizing has started of file at " + filePath);

    setTimeout(function () {
        let resizedFilePath = filePath.split('.')[0] + "-resized." + filePath.split('.')[1];
        console.log("The resizing has been completed!");
        done(resizedFilePath)
    }, 3000);
}

function upload(filePath, done) {
    console.log("Uploading has started of file at " + filePath);

    setTimeout(function () {
        let uploadPath = "https://mysite.com/uploads/" + filePath.split('/').pop();
        console.log("The uploading has been completed!");
        done(uploadPath);
    }, 3000);
}

downloadFile("https://mysite.com/logo.png", function (downloadResult) {
    console.log("The resulting download path is " + downloadResult);
    resize(downloadResult, function (resizeResult) {
        console.log("The resulting resized path is " + resizeResult);
    })

});



const fs = require('fs');

fs.writeFile("myfile.txt", "New data to be written", (err) => {
    if (err) return err;

    console.log("File written successfully!!")

    fs.readFile("myfile.txt", (err, data) => {
        if (err) return err;
        console.log(data);

    })
})


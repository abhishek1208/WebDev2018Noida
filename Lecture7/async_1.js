function task(done){
    console.log("We are doing a task");
    setTimeout(done,3000);
}

function done () {
    console.log("The task has been done")
    console.log("We are terminating the program!")
}

task(done);


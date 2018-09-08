const num=20;

function scopes(){
    const num=30
    console.log(num);
    if(true){
         const num=40;
        console.log(num);
    }
    console.log(num);

}

scopes();
console.log(num);
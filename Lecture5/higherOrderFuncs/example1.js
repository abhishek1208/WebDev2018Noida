function a(x) {

    let fun1 = function (y) {

        let fun2 = function (w) {

            let fun3 = function (z) {

                return x + y + w + z;
            }
            return fun3;
        }

        return fun2;
    }
    return fun1;

}

let retFun1 = a(1);
let retFun2 = retFun1(2);
let retFun3 = retFun2(3);
let retValue = retFun3(4);
console.log(retValue)
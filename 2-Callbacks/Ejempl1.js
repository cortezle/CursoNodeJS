function runCallBack(a,b,cb){
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);
    if(a>b){
        console.log("A es mayor que B");
    }
    else{
        console.log("B es mayor o igual que A");
    }
    cb(a+b);
}

console.log("-----Show time-----");
runCallBack(3,6,function(c){
    console.log(`A+B=${c}`);
    console.log(`sqrt(A+B) = ${Math.sqrt(c)}`);
});


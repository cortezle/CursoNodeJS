

function showVarScope(){
    var numb1 = 1997;
    if(true){
        var numb1 = 2020;
        console.log("Inside if"+numb1);
    }
    console.log("Outside if"+numb1);
}

function showLetScope(){
    let numb1 = 1997;
    if(true){
        let numb1 = 2020;
        console.log("Inside if"+numb1);
    }
    console.log("Outside if"+numb1);
}

console.log("calling var scope");
showVarScope();
showLetScope();
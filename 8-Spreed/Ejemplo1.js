const spreadArray = ()=>{
    let oldArray = [9,8,7];
    let newArrayWithoutSpread = [oldArray,6,7,8,9];
    let newArrayWithSpread = [...oldArray,6,7,8,9];
    console.log(newArrayWithSpread);
    console.log(newArrayWithoutSpread);
};

spreadArray();
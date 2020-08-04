function getAllRowsCallback(millis,onDone){
    const resultSet = [1,3,5,6,7];
    setTimeout(function(){
        console.log(`Finished after ${millis}`);
        onDone(resultSet);
    },millis);

}

console.log("-----running-----");
getAllRowsCallback(1000,function(resultSet){
    console.log("Result Array: "+resultSet);
});

console.log("Other things")
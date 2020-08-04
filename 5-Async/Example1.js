
const asyncCall = async()=>{
    let value = 5;

    setTimeout(()=>{
        value += value;
        console.log(`value*2 = ${value}`);

    },2000);
}
const asyncCall2 = () => new Promise((resolve,reject)=>{
    let value = 5;

    setTimeout(()=>{
        value += value;
        console.log(`value*2 = ${value}`);
        resolve();
    },2000);
});

console.log("Calling");
asyncCall();
console.log("Message after");
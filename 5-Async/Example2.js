const sqrAfterYmillis = (num,millis)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = num * num;
            //se cumple la promesa y se devuelve ese valor
            resolve(result);
            if(num < 3){
                reject(new Error("error por num p"))
            }else{

            }
        },millis);
    });
};

const delayedPow11 = async()=>{
    try {
        const num1 = await sqrAfterYmillis(20,3000);
        const num2 = await sqrAfterYmillis(10,4000);
        console.log(num1,num2);
    } catch (error) {
        console.log(error.message);
    }
}

const delayedPow1 = async()  => {
    /*con await espera para ver si devuelte algo
    y si devuelve entonces lo retorna en num1
    */
    const num1 = await sqrAfterYmillis(20,3000);
    const num2 = await sqrAfterYmillis(10,4000);
    console.log(num1,num2);
};

delayedPow1();
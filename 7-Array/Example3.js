/**
 * for each
 */
const array = [1,2,3,4,5,6];

const oddEven = ()=>{
    array.forEach((element,index,a) =>{
        console.log(`Indice: ${index}`);
        element % 2 === 0 ? console.log("Even" + element):
        console.log("UnEven"+element);
    })
}

oddEven();
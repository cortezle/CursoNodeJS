/**
 * Concat, slice, splice
 */

let array = [9,5,6,3];
let array2 = [1,2,3,4,5];

const concatEx = ()=>{
    //copia nueva
    const array3 = array.concat(array2);
    console.log(array3);
    console.log(array);

}

const sliceEx = ()=>{
    //no mutable
    const aSlice = array.slice(1,4);
    console.log(aSlice);
}

const spliceEx = ()=>{
    //si muta, si altera el original
    const aSplice = array.splice(1,2);
    console.log(aSplice);
    console.log(array);

}
//concatEx();
//sliceEx();
spliceEx();
/**
 * push pop unshift shift
 */


 let array = [9,5,6,3];
 let array2 = [1,2,3,4,5];

 const manejoFinal = ()=>{
     console.log("Pila");

     array.push(4);
     console.log(array);

     array.push(1,2,3,4);
     console.log(array);

     console.log(array.pop());
     console.log(array);
 }

 //manejoFinal();

 const manejoInicio = ()=>{
     console.log("Inicio");
     console.log(array2);

     array2.unshift(2);
     console.log(array2);

     array2.unshift(5,3,12,2);
     console.log(array2);

     array2.shift();
     console.log(array2);
 }

 manejoInicio();
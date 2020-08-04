/**
 * Map
 */

const numbers = [1,2,3,4,5,6];

const people =[
    {name:"Douglas",lastname:"Hernandez"},
    {name:"Pedro",lastname:"Gomez"}
];

const fun = ()=>{
    const arrayTimes2 = numbers.map(element=>{
        return element*2;
    });
    console.log(arrayTimes2);

    const fn = people.map(element=>{
        return `${element.name} ${element.lastname}`;
    })
    console.log(fn);
};

fun();
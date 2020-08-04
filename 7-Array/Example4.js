/**
 * Filter
 */

const names = [
    "Daniel",
    "Erick",
    "Carlos",
    "Rodrigo",
    "Carla",
    "Elsy"
]

const filterNames = ()=>{
    const eNames = names.filter((element,index,array)=>{
        return element[0] === "E";
    });
    console.log(eNames);
};

filterNames();
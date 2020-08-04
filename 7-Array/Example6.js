const names = [
    "Daniel",
    "Erick",
    "Carlos",
    "Rodrigo",
    "Carla",
    "Elsy"
];

const fun = ()=>{
    const classroom = names.reduce((acc,element)=>{
        return acc + element + ", ";
    },"");
    console.log(classroom);
};

fun();
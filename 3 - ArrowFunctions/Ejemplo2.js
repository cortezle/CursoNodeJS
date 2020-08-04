const af1 = ()=>{
    console.log("no param");
};

const af2 = name =>{
    console.log(`name = ${name}`);
};

const af3 = (name,age)=>{
    console.log(`name = ${name}`);
    console.log(`age = ${age}`);
}


const af4 = (a,b)=>{
    const result = a+b;
    return result;
}

const af5 = (a,b)=>a+b;

af1();
af2("Lucho");
af3("Lucho",21);
console.log(af4(3,4));
console.log(af5(3,4));
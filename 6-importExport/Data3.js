const cpu = {
    cores:6,
    baseSpeed:3.6
};

const dated = new Date();

const add = (a,b)=>{
    return a+b;
};

const sub = (a,b)=>{
    return a-b;
};

export{
    cpu as default,
    dated,
    sub,
    add
};
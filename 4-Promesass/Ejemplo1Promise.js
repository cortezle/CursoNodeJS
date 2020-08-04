const isMommyHappy = (daddyReturn = false)=>{
    return new Promise((resolve, reject)=>{
        if(daddyReturn){
            resolve({
                isMommyHappy: true,
                reason: "Para regreso con cigarros"
            });
        }else{
            reject(new Error("Nunca regresó"));
        }
    })
};

isMommyHappy(true).then((state)=>{
    console.log(state);
}).catch((error)=>{
    console.log(error.message);
});

isMommyHappy(false).then((state)=>{
    console.log(state);
}).catch((error)=>{
    console.log(error.message);
});

isMommyHappy().then((state)=>{
    console.log(state);
}).catch((error)=>{
    console.log(error.message);
});
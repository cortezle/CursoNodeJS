const fs = require("fs")

const appendInFile = (text) => {
    return new Promise( (resolve,reject)=>{
        try{
            fs.writeFileSync("./result.txt",text,{
                flag:"a"
            });
            resolve();
        }catch(error){
            reject(new Error("Fallo al escribir en el archivo"));

        }
    });
}



appendInFile("Mucho texto gg \n").then(()=>{
    console.log("Exito");
}).catch((error)=>{
    console.log(error.message);
})
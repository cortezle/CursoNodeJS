const controller = {};
const data = [
	"Douglas",
	"Pedro",
	"Alejandra",
	"Tupic",
	"Roberto",
	"Nelson",
	"Banchon",
	"Victor",
	"Lucho",
	"Elsy",
	"Cesar",
	"Alcoleas",
	"Karla",
	"David",
	"Francisco",
	"Moemeister",
	"Manuel",
	"Marlene",
	"Maxisun",
	"Salvador",
	"Sarita",
	"Richie",
	"Stanley",
	"Adolfo",
	"Ernesto",
	"Freddy",
	"Karen",
	"Oscar",
	"Rocio",
	"Rene",
	"Antonio"
];


controller.signup = (req,res)=>{
    //console.log(req.body);

    const {username,email,password}= req.body;
    console.log(`
        ---------
        username ${username}
        email ${email}
        password ${password}
    `);

    if(!username || !email || !password ){
        //bad req
        return res.status(400).json({
            msg:"te faltaron campos"
        });
    }

    res.status(200).json({
        msg:"usuario registrado"
    });
};

controller.getUserById = (req,res)=>{
    const {id}= req.params;
    const idParsed = parseInt(id);
    if(isNaN(idParsed)){
        return res.status(400).json({
            msg:"bad req"
        });    
    }

    if(idParsed<0 || idParsed>=data.length){
        return res.status(400).json({
            msg:"Not found"
        });
    }

    return res.status(200).json({
        person: data[idParsed]
    });
};



controller.getAllUsers = (req,res)=>{
    //console.log(req.query);
    //asiganamos valor predefinidos por si vienen vacios
    console.log(req.headers.message);
    const {page=0,limit=10}=req.query;
    const pageParser = parseInt(page);
    const limitParser = parseInt(limit);
    if(isNaN(pageParser) || isNaN(limitParser)){
        return res.status(400).json({
            msg:"Bad req"
        });
    }

    const start = pageParser*limitParser;
    const final = start + limitParser;

    const slicedArray = data.slice(start,final);


    res.status(200).json(slicedArray);
}
module.exports = controller;
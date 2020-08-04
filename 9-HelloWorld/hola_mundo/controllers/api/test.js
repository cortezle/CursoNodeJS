const controller = {};

controller.getData = (req,res)=>{
    /**
     * Flow Logic
     */

     res.status(200).json([
         {name:"Doug",age:22},
         {name:"Pedro",age:22}
     ]);
}

controller.getPerson = (req, res) => { 
	res.status(200).json({
		name: "Douglas",
		age: 22
	}); 
}

controller.statusTest = (req, res) => {
	let name = "Douglas"; //Imaginacion body.name
	
	if (name !== undefined) {
		res.status(200).json({
			msg: "Todo bien!"
		})
	} else { 
		res.status(400).json({
			msg:"Chale, te faltó el name!"
		})
	}
 }

controller.getMethod = (req,res)=>{
	res.status(200).json({
		msg:"Get Method"
	});
};

controller.postMethod = (req,res)=>{
	res.status(200).json({
		msg:"Post Method"
	});
};

controller.putMethod = (req,res)=>{
	res.status(200).json({
		msg:"Put Method"
	});
};

controller.patchMethod = (req,res)=>{
	res.status(200).json({
		msg:"Patch Method"
	});
};

controller.deleteMethod = (req,res)=>{
	res.status(200).json({
		msg:"Delete Method"
	});
};



module.exports = controller;
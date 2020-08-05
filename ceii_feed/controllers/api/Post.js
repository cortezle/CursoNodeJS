const PostService = require("../../services/Post");
const {verifyID } = require("../../utils/MongoUtils");
const controller = {};

controller.create = async (req, res) => { 
	const fieldsValidation = PostService.verifyCreateFields(req.body);
	if (!fieldsValidation.success) { 
		return res.status(400).json(fieldsValidation.content);
	}
	try{
		const createPost = await PostService.create(req.body);
		if (!createPost.success) { 
			return res.status(406).json(createPost.content);
		}
		res.status(201).json(createPost.content);
	}catch(error){
		return res.status(500).json({error: error.message });
	}
	
}

controller.findOneById = async(req,res)=>{
	const {_id} = req.params;
	if(!verifyID(_id)){
		return res.status(400).json({
			error:"Error in ID"
		});
	}
	try {
		const postExists = await PostService.findOneById(_id);
		if(!postExists.success){
			return res.status(404).json(postExists.content);
		}
		return res.status(200).json(postExists.content);
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

controller.findAll = async(req,res)=>{
	const {page=0,limit=10}=req.query;

};


module.exports = controller;
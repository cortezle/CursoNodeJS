const PostService = require("../../services/Post");
const {verifyID } = require("../../utils/MongoUtils");
const {verifyTypeNumber}= require("../../utils/MisUtils")
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
		return res.status(500).json({error: "int s error" });
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
		return res.status(500).json({error: "int s error"});
	}
};

controller.findAll = async(req,res)=>{
	const {page=0,limit=10}=req.query;

	if(!verifyTypeNumber(page,limit)){
		return res.status(400).json({
			error:"Mistype in query"
		});
	}
	try {
		const postsResponse = await PostService.findAll(parseInt(page),parseInt(limit));
		res.status(200).json(postsResponse.content);
	} catch (error) {
		return res.status(500).json({
			error: "int s error"
		})
	}
};

controller.addLike = async(req,res)=>{
	const{_id}= req.body;
	if(!verifyID(_id)){
		return res.status(400).json({
			error:"error in the ID"
		});
	}
	try {
		const postExists = await  PostService.findOneById(_id);
		if(!postExists){
			return res.status(404).json(postExists.content);
		}
		const likeAdded = await PostService.addLike(postExists.content);
		if(!likeAdded){
			return res.status(409).json(likeAdded.content);
		}
		return res.status(200).json(likeAdded.content);
		

	} catch (error) {
		return res.status(500).json({
			error: "int s error"
		});
	}
};

controller.updatePost = async(req,res)=>{
	const {_id}= req.body;
	if(!verifyID(_id)){
		return res.status(400).json({
			error:"Error in ID :c"
		});
	}

	const fieldsVerified = PostService.verifyUpdateFields(req.body);
	if(!fieldsVerified.success){
		return res.status(400).json(fieldsVerified.content);
	}

	try {
		const postExists = await PostService.findOneById(_id);
		if(!postExists.success){
			return res.status(404).json(postExists.content);
		}
		const postUpdated= await PostService.updateOneById(
			postExists.content,
			fieldsVerified.content
		);

		if(!postUpdated.success){
			return res.status(409).json(postUpdated.content);

		}
		return res.status(200).json(postUpdated.content);
	} catch (error) {
		return res.status(500).json({
			error:"Internal server error"
		});
	}
}

controller.deleteOneByID = async(req,res)=>{
	const {_id} = req.body;
	if(!verifyID(_id)){
		return res.status(400).json({
			error:"Error in ID"
		});
	}

	try {
		const postExists = await PostService.findOneById(_id);
		if(!postExists){
			return res.status(404).json(postExists.content); 
		}
		const deletedPost = await PostService.deleteOneById(_id);
		if(!deletedPost){
			return res.status(409).json(deletedPost.content); 
		}
		return res.status(200).json(deletedPost.content);
	} catch (error) {
		return res.status(500).json({error: "internal server error"});
	}

};

module.exports = controller;
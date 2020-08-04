const PostService = require("../../services/Post");

const controller = {};

controller.create = async (req,res)=>{
    const {body} = req;
    const fieldsValidation = PostService.verifyCreateFields(body)
    if(!fieldsValidation.success){
        return res.status(400).json(fieldsValidation.content);
        console.log("aqui")
    }
    //si llego aqui ya estan validados los daytos:3
    const createPost = await PostService.create(body);
    if(!createPost.success){
    return res-status(500).json(createPost.content);
    }
    res.status(201).json(createPost.content);
};
module.exports = controller;

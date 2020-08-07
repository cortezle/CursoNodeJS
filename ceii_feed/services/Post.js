const service = {};
const PostModel = require("../models/Post");
const debg = require("debug")("log");
service.verifyCreateFields = ({ title,description, image,user})=>{
    let serviceResponse = {
        success:true,
        content:{
            msg:"Fields fine!"
        }
    }

    if(!title || !user){
        serviceResponse = {
            success:false,
            content:{
                error:"empty fields!"
            }
        }
        return serviceResponse;
    }
    
    /**
     * Todas las demás validaciones
     */

     return serviceResponse;
}

service.verifyUpdateFields = ({title,description,image})=>{
    let serviceResponse={
        success:true,
        content:{
        }
    }
    if(!title && !description && !image){
        serviceResponse={
            success:false,
            content:{
                error:"All fields are empty :v !"
            }
        }
        return serviceResponse;
    }
    

    if(title) serviceResponse.content.title = title;
    if(description) serviceResponse.content.description = description;
    if(image) serviceResponse.content.image = image;
    return serviceResponse;
};


service.create = async({ title,description, image,user})=>{
    let serviceResponse = {
        success:true,
        content:{
            msg:"PostCreated!"
        }
    }
    
    try {
        const post = new PostModel({
            title,
            description,
            image,
            user
        });
        const postSaved = await post.save();

        if(!postSaved){
            serviceResponse ={
                success:false,
                content:{
                    msg:"Post not created"
                }
            }
        }
        return serviceResponse;
    } catch (error) {
        throw error;
    }
}


service.findOneById = async(_id)=>{
    let serviceResponse = {
        success:true,
        content:{
            message:"post  found :'D"
        }
    };

    try {
        const post = await PostModel.findById(_id).exec();
        if(!post){
            serviceResponse={
                success:false,
                content:{
                    error:"post not found"
                }
            };
        }else{
            serviceResponse.content = post;
        }
        return serviceResponse;
    } catch (error) {
        throw error
    }
};

service.findAll = async(page,limit)=>{
    let serviceResponse = {
        success:true,
        content:{
        }
    }
    try {
        const posts = await PostModel.find({},undefined,{
            skip:page*limit,
            limit: limit,
            sort: [{
                updatedAt:-1
            }]
        }).exec();

        serviceResponse.content={
            posts,
            count: posts.length,
            page,
            limit
        }
        return serviceResponse;
    } catch (error) {
        return error
    }
};

service.addLike = async(post)=>{
    let serviceResponse = {
        success:true,
        content:{
            message:"Post Liked"
        }
    };
    try {
        post.likes += 1;
        const postUpdated = await post.save();
        if(!postUpdated){
            serviceResponse={
                success:false,
                content:{
                    message:"post not liked u.u"
                }
            };
        }
        return serviceResponse;
    } catch (error) {
        throw error
    }
}

service.updateOneById= async(post,contentToUpdate)=>{
    let serviceResponse={
        success:true,
        content:{
            message:"post updated !"
        }
    }
    try {
        const updatedPost = await PostModel.findByIdAndUpdate(post._id,{
            ...contentToUpdate,
            $push:{
                history:{
                    title:post.title,
                    description:post.description,
                    image:post.image,
                    modifiedAt: new Date
                }
            }
        });

        if(!updatedPost){
            serviceResponse={
                success:false,
                content:{
                    error:"postnot updated!"
                }
            }
        }
        return serviceResponse;
    } catch (error) {
        throw error
    }
};


service.deleteOneById = async(_id)=>{
    let serviceResponse={
        success:true,
        content:{
            message:"post deleted :'D"
        }
    }

    try {
        const postDeleted = await PostModel.findByIdAndDelete(_id).exec();
        if(!postDeleted){
            serviceResponse={
                success:false,
                content:{
                    error:"postnot deleted!"
                }
            } 
        }

        return serviceResponse;

    } catch (error) {
        debg(error)
        throw error
    }
}
module.exports = service;

const service = {};
const PostModel = require("../models/Post");

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
        throw new Error("internal server error");
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
        throw new Error("Internal server error");
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
        return new Error("Internal server error");
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
        throw new Error("Internal Server Error :c");
    }
}

module.exports = service;

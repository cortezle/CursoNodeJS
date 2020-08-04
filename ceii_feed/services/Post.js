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
    } catch (error) {
        serviceResponse ={
            success:false,
            content:{
                msg:"internal servber error"
            }
        }
    }finally{
        return serviceResponse;
    }
}

module.exports = service;

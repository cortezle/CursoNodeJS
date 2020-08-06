const UserModel = require("../models/User");
const { use } = require("../routes/api/Auth");
const user = require("../models/User");
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})");
const emailRegex = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")

const service = { };

service.verifyRegisterFields = ({username,email,password,name,photo})=>{
    let serviceResponse = {
        success:true,
        content:{}
    }
    if(!username || !email || !password ||!name ){
        serviceResponse={
            success:false,
            content:{
                error:"requiered fields empty"
            }
        }
        return serviceResponse
    }
   if(!emailRegex.test(email)){
       serviceResponse={
           success:false,
           content:{
               error:"field format email incorrect"
           }
       }
   }
   if(!passwordRegex.test(password)){
    serviceResponse={
        success:false,
        content:{
            error:"password must be strong 8,32"
        }
    }
    return serviceResponse;
   }
   return serviceResponse;
}

service.verifyLoginFields = ({identifier, password})=>{
    let serviceResponse={
        success:true,
        content:{}
    };

    if(!identifier || !password){
        serviceResponse={
            success:false,
            content:{
                error:"req fields empty u.u"
            }
        };
        return serviceResponse;
    }
    return serviceResponse;

};

service.findOneUsernameEmail = async(username,email)=>{
    let serviceResponse={
        success:true,
        content:{}
    }

    try {
        const user = await UserModel.findOne({
            $or:[{username:username},{email:email}]
        }).exec();
        if(!user){
            serviceResponse={
                success:false,
                content:{
                    error:"user not found:v"
                }
            }
        }else{
            serviceResponse.content = user;
        }
        return serviceResponse;
    } catch (error) {
        throw new Error("internal server error");
    }
}

service.register = async({username,email,password,name,photo})=>{
    let serviceResponse = {
        success:true,
        content:{
            message:"User registered"
        }
    }
    try {
        const user = new UserModel({
            username,
            email,
            password,
            name,
            photo
        });
        const userSaved = await user.save();
        if(!userSaved){
            serviceResponse={
                success:false,
                content:{
                    error:"user not registered!"
                }
            }
        }
        return serviceResponse;
    } catch (error) {
        throw new Error("internal server error service");
    }
};


module.exports = service;
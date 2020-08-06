const moongose = require("mongoose");
const Schema = moongose.Schema;
const Crypto = require("crypto");

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    hashedPassword:{
        type:String,
        default:""
    },
    name:{
        type:String,
        required:true,
    },
    photo:String,
    posts:{
        type:[{
            type:moongose.Schema.Types.ObjectId,
            rel:"Post"
        }]
    },
    savedPost:{
        type:[{
            type:moongose.Schema.Types.ObjectId,
            rel:"Post"
        }]
    },
},{

    timestamps:true
});

userSchema
    .virtual("password")
    .set(function(password){
        this.hashedPassword = Crypto.createHmac("sha256",password).digest("hex");
    });

userSchema.methods = {
    comparePassword: function(password){
        return (
            Crypto.createHmac("sha256",password).digest("hex") === this.hashedPassword
        );
    }
}

module.exports = moongose.model("User",userSchema);
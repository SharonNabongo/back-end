const mangoose =require("mangoose");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const userSchema =new mangoose.Scheme({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImageUrl:{
        type:String,
    },
});
userSchema.pre("save",async function (next) {try {I
if (!this.isModified('password')) {
    return next();
};
let hashedpassword =await bcrypt.hash
(this.password,10);
this.password=hashedpassword;
return next();
}catch(err){}

    
});
userSchema.methods.comparepassword =async function
(typepassword,next) {
    try{
        let isMatch;
    } catch(err){
        return next(err);
    }
    
};
const user =mongoose.model("user",userSchema);
module.exports = user;
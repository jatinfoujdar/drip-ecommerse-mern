import mongoose from "mongoose";
// import AuthRoles from "../utils/authRoles.js"
// import bcrypt from "bcryptjs";
// import JWT from "jsonwebtoken";
// import crypto from "crypto";
// import config from "../Config/index.js"


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
        maxLength: [20,"Name must be less than 20"]
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true,"Password is required"],
        minLength: [8,"Password must be atleast  8 char"],
        select: false
    },
    // role:{
    //     type: String,
    //     enum: Object.values(AuthRoles),
    //     default: AuthRoles.USER
    // },
    // forgotPasswordToken: String,
    // forgotPasswordExpiry: Date, 
 },
    {
    timestamps: true
   }
);

// //encrypt Password - hooks(pre)
// userSchema.pre("save",async function(next){
//     if(!this.isModified("password")) return next();
//     this.password =  await bcrypt.hash(this.password,10)
//     next();
// })

// //add more features directly to your schema

// userSchema.method = {
//     //compare password
//     comparePassword: async function(entredPassword){
//         return await bcrypt.compare(entredPassword,this.password)
//     },
//     // generate JWT Token
//     getJwtToken: function(){
//         return JWT.sign(
//             {
//                 _id: this._id,
//                 role: this.role
//             },
//             config.JWT_SECRET,
//             {
//                 expiresIn: config.JWT_EXPIRY
//             }
//         )
//     }
// }


export default mongoose.model("User",userSchema)
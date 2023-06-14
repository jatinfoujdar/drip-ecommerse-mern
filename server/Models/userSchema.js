import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import config from "../Config/index.js";
import crypto from "crypto";
import AuthRoles from "../utils/authRoles.js"

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [20, "Name must be less than 20"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters long"],
      select: false,
    },
    role:{
      type: String,
      enum: Object.values(AuthRoles),
      default: AuthRoles.USER
    },
    forgotPasswordToken: String,
    forgetPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
//add more feature directly to schema
userSchema.method={
  //compare password
  comparePassword: async function(enteredPassword){
      return await bcrypt.compare(enteredPassword,this.password)
  },
  //generate jwt token
     getJwtToken: function(){
      return JWT.sign(
          {
              _id: this._id,
              role: this.role
          },
          config.JWT_SECRET,
          {
              expiresIn: config.JWT_EXPIRY
          }
      )
  },
  generateForgetPasswordToken: function(){
      const forgetToken =  crypto.randomBytes(20).toString('hex');

      //1save to db
      this.forgotPasswordToken = crypto
      .createHash("sha256")
      .update(forgetToken)
      .digest("hex") 

      this.forgotPasswordExpiry = Date.now() + 20 + 60*1000
      //2return values to user

      return forgetToken;

  }
}

// Add more features directly to the schema

export default mongoose.model("User", userSchema);

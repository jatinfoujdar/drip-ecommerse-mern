import mongoose from "mongoose";
import config from "./index.js";


export const Connection = async()=>{
    const URL = process.env.MONGODB_URL
    try {
        await mongoose.connect(URL,
            
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
            })
            console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database",error.message);
    }
}

export default Connection;




import mongoose from "mongoose";


export const Connection = async()=>{
    const URL = "mongodb+srv://jatinfoujdar:jatinfoujdar1234@e-commerse.1dtnhmu.mongodb.net/?retryWrites=true&w=majority"
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




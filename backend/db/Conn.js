import mongoose from "mongoose";

const Connection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected");
        
    } catch (error) {
        console.log("Database connection:", error);
        return exit(1)
    }
}

export default Connection
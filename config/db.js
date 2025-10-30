import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect( "mongodb://localhost:27017/eventDB");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

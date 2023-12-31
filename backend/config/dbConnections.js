import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected: ${connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

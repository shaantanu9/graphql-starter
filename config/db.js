import dotenv from "dotenv";
import mongoose from "mongoose";

// Dotenv config
dotenv.config();

// Connect to MongoDB database
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default connect;

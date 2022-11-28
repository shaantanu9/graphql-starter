import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const MONGODB_URI = process.env.MONGO_URI;

const connect = () =>{
 return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
}
export default connect;

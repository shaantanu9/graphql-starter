import mongoose from "mongoose";
export const MONGODB_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/aaaagarbageDemo";

const connect = () =>
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default connect;

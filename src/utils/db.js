import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    console.log("Failed To Connect MongoDB");
  }
};

export default connect;

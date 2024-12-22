import "dotenv/config";
import mongoose from "mongoose";

export async function startServer() {
  try {
    console.log(process.env.MONGODBURL)
    await mongoose.connect("mongodb://localhost:27017/Blog-app");
  } catch (error) {
    console.log("Error connecting to the DB", error);
  }
}
import express from "express";
import {
  addBlog,
  getBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} from "../controller/blog.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);
blogRouter.get("/get", getBlogs);
blogRouter.get("/get/:id", getBlog);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.put("/update/:id", updateBlog);

export default blogRouter;
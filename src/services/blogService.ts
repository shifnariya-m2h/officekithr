 import axios from "axios";
import { BlogPost } from "../types";

const API_URL = "https://officekithrblog-server.onrender.com/api/blogs";

// Get all posts
export const getAllPosts = async (): Promise<BlogPost[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};


 
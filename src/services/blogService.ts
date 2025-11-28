 import axios from "axios";
import { BlogPost } from "../types";

const API_URL = "http://52.66.55.51:5000/api/blogs";

// Get all posts
export const getAllPosts = async (): Promise<BlogPost[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};


 
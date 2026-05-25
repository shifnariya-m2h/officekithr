import axios from "axios";
import { env } from "@/lib/env";
import { BlogPost } from "../types";

const API_URL = env.blogApiUrl;

let postsCache: BlogPost[] | null = null;
let cacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const now = Date.now();
  if (postsCache && now - cacheTime < CACHE_TTL_MS) {
    return postsCache;
  }
  const res = await axios.get<BlogPost[]>(API_URL);
  postsCache = res.data;
  cacheTime = now;
  return res.data;
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const res = await axios.get<BlogPost>(`${API_URL}/${encodeURIComponent(slug)}`);
    return res.data;
  } catch {
    const posts = await getAllPosts();
    return (
      posts.find((p) => {
        const postSlug =
          p.slug ||
          (p.title
            ? p.title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
            : "");
        return postSlug === slug;
      }) ?? null
    );
  }
};

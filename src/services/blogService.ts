import axios from "axios";
import { env } from "@/lib/env";
import { BlogPost } from "../types";

const API_URL = env.blogApiUrl;
const API_KEY = env.blogApiKey;

interface FlowPilotBlog {
  id: string;
  title: string;
  slug: string;
  author: string;
  content?: string;
  description?: string;
  metaDescription?: string;
  image?: string;
  categoryName?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt?: string;
}

interface FlowPilotBlogsResponse {
  success: boolean;
  data: {
    blogs: FlowPilotBlog[];
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
  };
}

let postsCache: BlogPost[] | null = null;
let cacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}

function estimateReadTime(content?: string): string {
  if (!content) return "5 min read";
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function mapFlowPilotBlog(blog: FlowPilotBlog): BlogPost {
  const excerpt =
    blog.metaDescription ||
    blog.description ||
    stripHtml(blog.content || "").slice(0, 160);

  return {
    _id: blog.id,
    title: blog.title,
    excerpt,
    content: blog.content,
    author: blog.author,
    createdAt: blog.publishedAt || blog.createdAt,
    updatedAt: blog.updatedAt,
    updates: blog.categoryName || "HR Trends",
    readTime: estimateReadTime(blog.content),
    image: blog.image || "",
    link: `/blog/${blog.slug}`,
    slug: blog.slug,
  };
}

function authHeaders(): Record<string, string> {
  if (!API_KEY) return {};
  return { Authorization: `Bearer ${API_KEY}` };
}

async function fetchFlowPilotBlogs(): Promise<BlogPost[]> {
  const res = await axios.get<FlowPilotBlogsResponse>(API_URL, {
    params: { page: 1, limit: 50, status: "published" },
    headers: authHeaders(),
  });

  if (!res.data?.success || !res.data.data?.blogs) return [];
  return res.data.data.blogs.map(mapFlowPilotBlog);
}

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const now = Date.now();
  if (postsCache && now - cacheTime < CACHE_TTL_MS) {
    return postsCache;
  }

  try {
    postsCache = await fetchFlowPilotBlogs();
    cacheTime = now;
    return postsCache;
  } catch {
    return postsCache ?? [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
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
};

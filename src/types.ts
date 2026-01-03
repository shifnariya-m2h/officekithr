// types/blog.d.ts
export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content?: string; 
  author: string;
  createdAt: string; 
  updatedAt?: string;
  updates: string; 
  readTime: string;  
  image: string;
  link: string;
  slug?: string; // URL-friendly slug for routing
}
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/services/blogService";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types";
import { extractExcerpt } from "@/utils/extractExcerpt";
import { slugify } from "@/utils/slugify";

const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop";

function normalizeApiPost(post: BlogPost): BlogPost {
  const slug = post.slug || slugify(post.title || "untitled");
  const createdAt =
    post.createdAt.split("T")[0] ||
    new Date().toISOString().split("T")[0];

  return {
    ...post,
    slug,
    excerpt:
      post.excerpt ||
      (post.content ? extractExcerpt(post.content) : "No preview available."),
    author: post.author || "Admin",
    createdAt,
    updates: post.updates || "General",
    readTime: post.readTime || "4 min read",
    image: post.image || DEFAULT_BLOG_IMAGE,
    link: `/blog/${slug}`,
  };
}

const Blog = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    { label: "All Posts", param: "" },
    { label: "HR Best Practices", param: "HR Best Practices" },
    { label: "Product Updates", param: "Product Updates" },
    { label: "Compliance News", param: "Compliance News" },
    { label: "Leadership & Culture", param: "Leadership & Culture" },
    { label: "Remote Work", param: "Remote Work" },
  ];

  const categoryParam = searchParams.get("category") || "";
  const activeCategory =
    categories.find((c) => c.param === categoryParam)?.label ?? "All Posts";

  // Hardcoded fallback posts
  const fallbackPosts: BlogPost[] = [
    {
      _id: "1",
      title: "The Future of Remote Work: HR Strategies for 2026 and Beyond",
      excerpt: "Discover the latest trends and strategies for managing remote teams effectively in the evolving workplace landscape.",
      author: "Aiswarya K",
      createdAt: "2026-05-27",
      updates: "HR Best Practices",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "/resources/blogs/hrblogs"
    },
    {
      _id: "2",
      title: "Why Invest in Enhanced Performance Management Tools?",
      excerpt: "Modern enterprises thrive by equipping their HR departments with technology that fosters employee satisfaction, improves talent retention, and accelerates organizational growth.",
      author: "Karthik",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "/resources/blogs/performance-management-tools"
    },
    {
      _id: "3",
      title: "Why Modern Businesses Need Smarter Payroll Solutions",
      excerpt: "Efficient payroll management is crucial for modern enterprises to ensure timely and accurate employee compensation, maintain compliance with tax regulations, and support overall organizational financial health.",
      author: "Nihal",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      link: "/resources/blogs/streamliningpayroll"
    },
    {
      _id: "4",
      title: "Mobile App Updates: Why Businesses Should Prioritize Mobile HRMS Security?",
      excerpt: "Securing your mobile HRMS app is essential to protect sensitive employee data, achieve payroll compliance, and prevent costly data breaches.",
      author: "Karthik",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      link: "/resources/blogs/mobileappupdates"
    },
    {
      _id: "5",
      title: "Navigating the Hybrid Workplace: Strategies for HR and Managers",
      excerpt: "Discover smart HR strategies and powerful HRMS software to manage hybrid workplaces, streamline payroll and compliance, boost employee engagement.",
      author: "Arathi",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "4 min read",
      image: "https://media.istockphoto.com/id/641434530/photo/human-resources-management-app-concept-on-mobile-phone-screen.jpg?s=612x612&w=0&k=20&c=4647ZElnjvbVc8dJ0xXvU2Gb_dTtOpI1hXzcGF9oaQg=",
      link: "/resources/blogs/navigatehybrid"
    },
    {
      _id: "6",
      title: "Quality vs. Quantity: Why the Right Hire Saves More Than You Think",
      excerpt: "Recruitment is one of the most important jobs for HR. Choosing quality over quantity saves money, time, and builds long-term growth.",
      author: "Aiswarya K",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "3 min read",
      image: "https://media.istockphoto.com/id/2124660831/photo/human-resources-management-concept-headhunters-recruit-employees-using-candidate-resumes.jpg?s=612x612&w=0&k=20&c=e8gfkrHenE0WfD8QD9_Mxd-FfWEBs5-Bt2THMrWvYaM=",
      link: "/resources/blogs/quality-vs-quantity-hiring"
    },
    {
      _id: "7",
      title: "Why Businesses Need an HRMS in Today’s Competitive Landscape",
      excerpt: "The business world is rapidly changing faster than ever, and people managing is becoming more challenging. Old-style HR methods just don’t work anymore.",
      author: "Aiswarya K",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/1346294817/photo/human-resource-hexagonal-touch-screen-concept.jpg?s=612x612&w=0&k=20&c=ojdwiev7bHuD_Z7gr7858fAKmN1YzigrUlRJiTV_WjQ=",
      link: "/resources/blogs/whyhrms"
    },
    {
      _id: "8",
      title: "Why Embrace AI-Powered Features in HRMS?",
      excerpt: "In today’s digital workplace, AI is no longer a future concept — it’s a strategic advantage. Forward-thinking organizations are enhancing their HRMS platforms with artificial intelligence.",
      author: "Karthik",
      createdAt: "2026-05-27",
      updates: "AI Updates",
      readTime: "4 min read",
      image: "https://media.istockphoto.com/id/1693321583/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-with-kpi-and-metrics.jpg?s=612x612&w=0&k=20&c=3swv6pL3k5w9KRX2UzPdX4vor442SI7Nbfsys9BIvgg=",
      link: "/resources/blogs/aipowered"
    },
    {
      _id: "9",
      title: "Real World DEI: Actions That Drive Inclusion, Equity & Diversity",
      excerpt: "In recent years, many companies talk about Diversity, Equity, and Inclusion (DEI). DEI means action changing how things work, who is included, and how fair the system is for everyone.",
      author: "Aiswarya K",
      createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/1467509880/photo/hrm-or-human-resource-management-businessman-holding-magnifier-select-and-accept-to-manager.jpg?s=612x612&w=0&k=20&c=jHwUtais34k9MQ_lq703k1jkF5JXBc10imCBsrT4bHY=",
      link: "/resources/blogs/realworld-dei"
    },
    {
      _id: "10",
      title: "Why a Human Resource Management System (HRMS) Like OfficeKit HR is Essential for Modern Businesses",
      excerpt: "The business world is rapidly changing faster than ever, and people managing is becoming more challenging. Old-style HR methods just don’t work anymore.",
      author: "Arathi",
        createdAt: "2026-05-27",
      updates: "Product Updates",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/1155674251/photo/hr-and-people-network-interface.jpg?s=612x612&w=0&k=20&c=WFkloP-aPgHs4DS3EoI5gUWaAGQI5lkWYDN0nMzy-Ds=",
      link: "/resources/blogs/hrmssystem"
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiPosts = await getAllPosts();

        const normalizedApiPosts = (apiPosts || []).map(normalizeApiPost);

        // Merge: API first, then fallback (deduped)
        const combined = [
          ...normalizedApiPosts,
          ...fallbackPosts.filter(fp => !normalizedApiPosts.some(ap => ap._id === fp._id))
        ];

        // Sort by date: newest first
        const sorted = combined.sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setAllPosts(sorted);
      } catch (error) {
        console.error("Error fetching posts:", error);
        const sortedFallback = [...fallbackPosts].sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setAllPosts(sortedFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  /* ────────────────────── NEW DATE FORMATTER ────────────────────── */
  const formatBlogDate = (isoDate: string): string => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date(isoDate);
    const month = months[d.getMonth()];
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  /* ───────────────────────────────────────────────────────────────── */


  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading posts...</div>
      </div>
    );
  }

  const filteredPosts = activeCategory === "All Posts"
    ? allPosts
    : allPosts.filter(post => post.updates === activeCategory);


const featuredPost = filteredPosts[0];
  const latestPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

        {/* Hero Section */}
        <section
          className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 bg-gradient-subtle bg-cover bg-center"
          style={{ backgroundImage: "url('/RecruitmentManagement2.jpg')" }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Insights & Updates from the <span className="gradient-text"> HR World </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8">
                Stay ahead with the latest trends, tips, and strategies for HR professionals.
                Expert insights to help you build better workplaces.
              </p>
           <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.label}
                  variant={activeCategory === cat.label ? "default" : "outline"}
                  className="rounded-full text-xs sm:text-sm"
                  onClick={() => {
                    if (cat.param) {
                      setSearchParams({ category: cat.param });
                    } else {
                      setSearchParams({});
                    }
                  }}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-white font-normal py-2 text-[#3f5ffc] mb-3 sm:mb-4 border border-[#ededed]">
                  Blogs
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Featured Article</h2>
              </div>

              <Link to={featuredPost.link} className="block">
                <Card className="overflow-hidden border-border shadow-strong cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px]"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                        <span className="flex items-center space-x-1">
                          <Tag className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{featuredPost.updates}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{formatBlogDate(featuredPost.createdAt)}</span>
                        </span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{featuredPost.author}</span>
                        </div>
                        <Button className="btn-cta">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid - Latest Articles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Latest Articles</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Stay updated with our latest insights and updates
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {latestPosts.map((post) => (
                <Link key={post._id} to={post.link} className="block">
                  <Card className="overflow-hidden border-border shadow-medium cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                        <span className="flex items-center space-x-1">
                          <Tag className="h-3 w-3" />
                          <span>{post.updates}</span>
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{formatBlogDate(post.createdAt)}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {latestPosts.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No articles available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
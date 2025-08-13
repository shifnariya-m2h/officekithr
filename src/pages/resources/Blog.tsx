import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    "All Posts",
    "HR Best Practices",
    "Product Updates", 
    "Compliance News",
    "Leadership & Culture",
    "Remote Work"
  ];

  const blogPosts = [
    {
      title: "The Future of Remote Work: HR Strategies for 2024",
      excerpt: "Discover the latest trends and strategies for managing remote teams effectively in the evolving workplace landscape.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "HR Best Practices",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "New Performance Management Features Released",
      excerpt: "Explore our latest performance management enhancements including 360-degree reviews and advanced analytics.",
      author: "Mike Chen",
      date: "March 12, 2024", 
      category: "Product Updates",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Labor Law Updates: What HR Teams Need to Know",
      excerpt: "Stay compliant with the latest labor law changes and understand their impact on your HR processes.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Compliance News", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    },
    {
      title: "Building a Culture of Continuous Learning",
      excerpt: "Learn how to foster employee development and create learning opportunities that drive engagement.",
      author: "David Kumar",
      date: "March 8, 2024",
      category: "Leadership & Culture",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
    },
    {
      title: "Streamlining Payroll: Best Practices Guide",
      excerpt: "Essential tips and strategies for error-free payroll processing and maintaining compliance standards.",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      category: "HR Best Practices",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      title: "Mobile App Updates: Enhanced Security Features",
      excerpt: "Discover the new security enhancements in our mobile app including biometric authentication and data encryption.",
      author: "Mike Chen", 
      date: "March 3, 2024",
      category: "Product Updates",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Insights and Updates from the HR World
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead with the latest trends, tips, and strategies for HR professionals. 
              Expert insights to help you build better workplaces.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden border-border shadow-strong">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span>{blogPosts[0].category}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                    </div>
                    <Button className="btn-cta group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Stay updated with our latest insights and updates
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="overflow-hidden border-border shadow-medium hover:shadow-strong transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center space-x-1">
                        <Tag className="h-3 w-3" />
                        <span>{post.category}</span>
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="btn-outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-primary-foreground/80 mb-8">
              Subscribe to our newsletter and get the latest HR insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
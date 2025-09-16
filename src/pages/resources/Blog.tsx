import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
const Blog = () => {
  const categories = [
    "All Posts",
    "HR Best Practices",
    "Product Updates",
    "Compliance News",
    "Leadership & Culture",
    "Remote Work"
  ];

  const navigate = useNavigate();
  const handlenext = () => {
    navigate('/resources/blog/hrblogs')
  }
  const handlenextblog2 = () => {
    navigate('/resources/blog/newperfomenceblog')
  }



  const blogPosts = [
    {
      title: "The Future of Remote Work: HR Strategies for 2025 and Beyond",
      excerpt: "Discover the latest trends and strategies for managing remote teams effectively in the evolving workplace landscape.",
      author: "Aiswraya R",
      date: "August 15, 2025",
      category: "HR Best Practices",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "/resources/blog/hrblogs"

    },
    {
      title: "Why Invest in Enhanced Performance Management Tools?",
      excerpt: "Modern enterprises thrive by equipping their HR departments with technology thatfosters employee satisfaction, improves talent retention, and accelerates organizational growth.",
      author: "Karthik",
      date: "August 28, 2025",
      category: "Product Updates",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "/resources/blog/newperfomenceblog"
    },
    {
      title: "Why Modern Businesses Need Smarter Payroll Solutions",
      excerpt: "Efficient payroll management is crucial for modern enterprises to ensure timely and accurate employee compensation, maintain compliance with tax regulations, and support overall organizational financial health. Investing in advanced payroll technology enhances employee satisfaction, reduces administrative burden, and accelerates operational efficiency.",
      author: "Nihal",
      date: "August 29, 2025",
      category: "Product Updates",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      link: "/resources/blog/streamliningpayroll"

    },
    {
      title: "Mobile App Updates: Why Businesses Should Prioritize Mobile HRMS Security?",
      excerpt: "Securing your mobile HRMS app is essential to protect sensitive employee data, achieve payroll compliance, and prevent costly data breaches.By investing in innovative mobile HR security solutions, organizations enhance employee trust,maintain regulatory compliance(GDPR, HIPAA), and improve workforce productivity with reliable, accessible, and secure HR technology.",
      author: "Karthik",
      date: "August 3, 2025",
      category: "Product Updates",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      link: "/resources/blog/mobileappupdates"
    },
    // blog 2nd phase
    {
      title: "Navigating the Hybrid Workplace: Strategies for HR and Managers",
      excerpt: "Discover smart HR strategies and powerful HRMS software to manage hybrid workplaces, streamline payroll and compliance, boost employee engagement, and build a culture of trust, inclusion, and high performance.",
      author: "Karthik",
      date: "Auguest 16, 2025",
      category: "Product Updates",
      readTime: "4 min read",
      image: "https://media.istockphoto.com/id/641434530/photo/human-resources-management-app-concept-on-mobile-phone-screen.jpg?s=612x612&w=0&k=20&c=4647ZElnjvbVc8dJ0xXvU2Gb_dTtOpI1hXzcGF9oaQg=",
      link: "/resources/blog/navigatehybrid"
    },
    {
      title: "Quality vs. Quantity: Why the Right Hire Saves More Than You Think",
      excerpt: "Recruitment is one of the most important jobs for HR. When a company wants to grow, the first thought of an HR is often to hire many people quickly. This Quick and high numbers of hiring may solve the problem in the short term, but it can create hidden costs for the business. On the other hand, choosing the right hire (quality hiring) instead of rushing to fill seats (quantity hiring) saves money, time, and effort. It also helps the company grow stronger in the long run and results in profit for the company.",
      author: "Aiswraya R",
      date: "August 18, 2025",
      category: "Product Updates",
      readTime: "3 min read",
      image: "https://media.istockphoto.com/id/2124660831/photo/human-resources-management-concept-headhunters-recruit-employees-using-candidate-resumes.jpg?s=612x612&w=0&k=20&c=e8gfkrHenE0WfD8QD9_Mxd-FfWEBs5-Bt2THMrWvYaM=",
      link: "/resources/blog/qualityvsquatity"
    },
    {
      title: "Why Businesses Need an HRMS in Today’s Competitive Landscape",
      excerpt: "The business world is rapidly changing faster than ever, and people managing is becoming more challenging. Old-style HR methods just don’t work anymore. Today, especially for SMEs and startups, businesses need a human resource management system (HRMS) that can simplify operations, ensure compliance, and keep employees engaged.",
      author: "Aiswraya R",
      date: "August 25, 2025",
      category: "Product Updates",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/1346294817/photo/human-resource-hexagonal-touch-screen-concept.jpg?s=612x612&w=0&k=20&c=ojdwiev7bHuD_Z7gr7858fAKmN1YzigrUlRJiTV_WjQ=",
      link: "/resources/blog/whyhrms"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.png')",
        }}      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Insights  Updates from the  <span className="gradient-text"> HR World </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8">
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
              <Badge className="bg-white font-normal py-2  text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent"  >
                Blog
              </Badge>
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
                    <Button className="btn-cta group" onClick={handlenext}>
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
                      <Link to={post.link}>
                        <Button variant="ghost" size="sm" className="group" >
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* 
            <div className="text-center mt-12">
              <Button className="btn-outline">
                Load More Articles
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Blog;
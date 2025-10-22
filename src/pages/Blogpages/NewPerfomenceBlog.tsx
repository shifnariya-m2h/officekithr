import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function HRMSBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/resources/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <Badge className="mb-4">HRMS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Advanced Performance Management Features Released for HRMS
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Karthik</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 29, 2025</span>
              </div>
              <span>8 min read</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </header>

   
          <div className="aspect-video rounded-lg mb-8 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/644335608/photo/personal-development-self-improvement-and-career-growth.webp?a=1&b=1&s=612x612&w=0&k=20&c=nQzmVcPYRpa2-A5vC3G82wCPR9b4__eX3XjD5V5IzYs="
              alt=" Performance Management"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest performance management system upgrades designed to empower HR teams and business leaders with innovative tools for talent acquisition, employee productivity, and workforce optimization. These new features help organizations streamline employee performance reviews, promote engagement, and drive measurable business outcomes in today’s competitive market.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Benefits for HR Professionals
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Drive higher employee engagement and motivation through transparent evaluations and feedback</li>
              <li>Implement data-driven performance appraisal processes that remove bias and increase fairness</li>
              <li>Support flexible and hybrid work models with cloud-based performance tracking</li>
              <li>Align workforce efforts with strategic business objectives to maximize ROI on talent investments</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Leverage the power of our next-gen performance management software—combining 360-degree feedback systems, goal management solutions, and HR analytics tools—to elevate your organization’s talent strategy and achieve superior business results.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What’s New in the Latest HRMS Update
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>360-Degree Performance Reviews and Feedback:</strong> Collect multi-source evaluations from managers, peers, and direct reports to provide a holistic view of employee performance and foster continuous improvement.</li>
              <li><strong>Advanced HR Analytics and Workforce Metrics:</strong> Utilize dashboards and real-time tracking to uncover performance patterns, predict turnover risk, and identify skill gaps for effective succession planning.</li>
              <li><strong>Goal Setting and OKR Alignment:</strong> Promote strategic alignment by linking individual objectives to company-wide KPIs and goals with the popular OKR framework.</li>
              <li><strong>Flexible Review Cycles and Customizable Workflows:</strong> Adapt review schedules to quarterly, biannual, or project-based cycles, enabling personalized development strategies.</li>
              <li><strong>Continuous Feedback and Coaching:</strong> Encourage ongoing dialogue with real-time feedback tools and coaching to boost engagement and retention.</li>
              <li><strong>Integration with Leading HRMS Platforms:</strong> Seamlessly connect these advanced features to your existing HRIS for unified talent and workforce management.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
            <p className="text-muted-foreground mb-6">
              The newest HRMS performance management upgrades are designed to help businesses unlock the full potential of their workforce. By combining transparency, analytics, and continuous engagement, HR professionals can now drive talent strategies that directly support organizational success.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Performance Management with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore how our advanced HRMS features enable smarter talent strategies, improved engagement, and measurable business growth.
            </p>
            <Link to="/resources/blog">
              <Button size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

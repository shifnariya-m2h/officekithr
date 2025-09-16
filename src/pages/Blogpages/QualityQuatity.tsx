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
              Quality vs. Quantity: Why the Right Hire Saves More Than You Think
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Aishwarya k</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 16, 2025</span>
              </div>
              <span>5 min read</span>
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
              src="https://media.istockphoto.com/id/1168003566/photo/quality-vs-quantity-signpost-depicting-balance-between-product-or-service-superiority-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=jT78QrB8aS9gmZ-0cLnEFWQ834_RP_Y6Bk22gIk7nfU="
              alt=" Quality vs Quantity"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Recruitment is one of the most important jobs for HR. When a company wants to grow, the first thought of an HR is often to hire many people quickly. This quick and high number of hiring may solve the problem in the short term, but it can create hidden costs for the business. On the other hand, choosing the right hire (quality hiring) instead of rushing to fill seats (quantity hiring) saves money, time, and effort. It also helps the company grow stronger in the long run and results in profit for the company.
            </p>
            <p className="text-muted-foreground mb-6">
              Focusing on quality hires is better for company profit, employee performance, and overall success. Let’s discuss the overall impact of quality hires over quantity hiring.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. The Real Cost of a Wrong Hire</h2>
            <p className="text-muted-foreground mb-6">
              A wrong hire is more expensive than most HRs realize. Studies show that a bad hire can cost up to 30% of the manager’s first-year salary. The loss is not only in terms of money—it also affects employee growth and business growth. Below are the consequences HR should be aware of:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Training waste: if the person leaves early, training costs are wasted</li>
              <li>Team problems: poor hires lower morale and slow projects</li>
              <li>Extra recruitment costs: HR must restart hiring</li>
              <li>Lost productivity: deadlines are missed, customers may be unhappy</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How Quality Hiring Increases Company Profit</h2>
            <p className="text-muted-foreground mb-6">
              A quality hire doesn’t just fill a role—they improve overall business growth:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Higher productivity: good hires deliver better results</li>
              <li>Culture fit: teamwork improves when values align</li>
              <li>Innovation: skilled people bring new ideas</li>
              <li>Retention: quality hires stay longer</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Quantity vs. Quality: The HR Challenge</h2>
            <p className="text-muted-foreground mb-6">
              Organizations often pressure HR to fill jobs quickly. While quantity hiring may look good on reports, it usually leads to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>High turnover</li>
              <li>More HR workload</li>
              <li>Loss of trust in the hiring process</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Quality hiring requires time, assessments, and alignment with managers—but results in stronger teams.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Profit Comparison: Quality vs. Quantity</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><b>Case 1: Quantity Hiring</b> – hire 5 quickly, 2 quit, 1 underperforms, targets not met</li>
              <li><b>Case 2: Quality Hiring</b> – hire 3 carefully, all exceed targets and stay longer</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. How HR Can Focus on Quality</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Clear job descriptions highlighting culture fit</li>
              <li>Employer branding to attract top talent</li>
              <li>Use of assessments and behavioral tests</li>
              <li>Collaboration with managers on role needs</li>
              <li>Track retention and performance, not just time-to-fill</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. HR Mindset: Building Teams, Not Just Filling Seats</h2>
            <p className="text-muted-foreground mb-6">
              Recruitment should be a long-term investment. HR’s goal is not just filling chairs but building loyal, high-performing teams that grow with the business.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
            <p className="text-muted-foreground mb-6">
              Hiring is one of the most strategic functions of HR. While quantity hiring may seem like a quick fix, it often results in turnover and wasted resources. Quality hiring builds strong teams, improves retention, boosts productivity, and saves hidden costs. Every quality hire is an investment in innovation, loyalty, and growth.
            </p>
            <p className="text-muted-foreground mb-6">
              The debate is really about profitability, culture, and business growth. For HR leaders, the choice is clear: don’t rush. Focus on quality recruitment, because in the long run, one great employee is worth more than several average ones.
            </p>
            <p className="text-muted-foreground mb-6">
              Final thought: Recruitment success is not about numbers—it’s about the right people who stay, grow, and drive profit. In recruitment, quality is not just important—it is everything.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our HRMS helps businesses simplify HR, engage employees, and drive growth.
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

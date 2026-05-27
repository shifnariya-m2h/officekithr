import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BackToBlog from "@/components/BackToBlog";
import { StaticBlogShell } from "@/components/StaticBlogShell";
import { StaticBlogHeader } from "@/components/StaticBlogHeader";
import { STATIC_BLOG_POSTS } from "@/data/static-blog-posts";

const meta = STATIC_BLOG_POSTS["/resources/blogs/hrblogs"];

export default function RemoteWorkHrBlog() {
  return (
    <StaticBlogShell meta={meta}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <article className="pt-24 pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <BackToBlog className="mb-10 mt-2" />

            <StaticBlogHeader meta={meta} />

            <div className="aspect-video rounded-lg mb-8 overflow-hidden">
              <img
                src={meta.image}
                alt="Remote team collaborating across locations with digital HR tools"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={630}
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Remote and hybrid work are no longer temporary arrangements — they are a core
                operating model for 2026. HR teams must redesign policies, tools, and manager
                practices so distributed teams stay productive, compliant, and engaged.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Build clear remote work policies
              </h2>
              <p className="text-muted-foreground mb-6">
                Employees need documented expectations for availability, communication channels,
                data security, and equipment use. Policies should align with local labor laws in
                India, the UAE, and other GCC markets where your team members are based.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Use HRMS for attendance and leave visibility
              </h2>
              <p className="text-muted-foreground mb-6">
                Manual spreadsheets cannot track hybrid shifts, geo-fenced check-ins, or leave
                balances across time zones. A cloud HRMS gives real-time attendance data and
                reduces payroll disputes before they start.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Prioritize manager check-ins and engagement
              </h2>
              <p className="text-muted-foreground mb-6">
                Remote employees often disengage when feedback is infrequent. Schedule structured
                1:1s, pulse surveys, and recognition cycles. Tie performance goals to measurable
                outcomes instead of hours logged online.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                4. Secure payroll and compliance workflows
              </h2>
              <p className="text-muted-foreground mb-6">
                Distributed teams increase compliance complexity — tax rules, WPS in the UAE, and
                statutory filings still apply. Automate payroll with audit trails and role-based
                access so sensitive HR data stays protected on any device.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                5. Invest in mobile self-service
              </h2>
              <p className="text-muted-foreground mb-6">
                Remote staff expect mobile access to payslips, leave requests, and approvals.
                Mobile HRMS apps reduce HR inbox volume and speed up decisions for managers on the
                move.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
              <p className="text-muted-foreground mb-6">
                Winning remote work in 2026 is a blend of policy clarity, manager habits, and the
                right HR technology. OfficeKit HR helps teams unify recruitment, attendance,
                payroll, and employee self-service — whether your workforce is in-office, remote,
                or hybrid.
              </p>
            </div>

            <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Transform Your HR with OfficeKit
              </h2>
              <p className="text-muted-foreground mb-6">
                See how OfficeKit HR supports remote and hybrid teams across India and the GCC.
              </p>
              <Link to="/contact">
                <Button size="lg">Book a Demo</Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </StaticBlogShell>
  );
}

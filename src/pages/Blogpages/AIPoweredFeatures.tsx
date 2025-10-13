import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIBlog() {
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
            <Badge className="mb-4">AI in HRMS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Embrace AI-Powered Features in HRMS?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Karthik</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 13, 2025</span>
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
              src="https://media.istockphoto.com/id/2191437022/photo/hr-management-with-ai-recruiting-technology-concept-businessman-uses-a-laptop-recruitment.jpg?s=612x612&w=0&k=20&c=B_4kAb9mkAGSRvXdY9dGGC4lrfGqI83SGS6mX2kSwqE="
              alt="AI-Powered HRMS"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              In today’s digital workplace, AI is no longer a future concept—it’s a strategic
              advantage. Forward-thinking organizations are enhancing their HRMS platforms with
              artificial intelligence to automate routine processes, deliver personalized
              employee experiences, and boost HR efficiency at scale.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Intelligent AI Features Now Integrated in HRMS
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore the newest AI-powered capabilities now available in our HRMS, designed to
              simplify HR workflows and create smarter interactions between employees and the
              system. With intelligent chatbots and voice-enabled tools, your HR operations can
              become more responsive, intuitive, and employee-centric—all while saving valuable
              time and resources.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Benefits for HR Professionals
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>
                Automate common HR queries (like leave applications, payslip requests, and
                policy FAQs) through intelligent, 24/7 chat support
              </li>
              <li>
                Enhance accessibility and inclusivity with audio-based interactions, allowing
                employees to engage with HR services using voice
              </li>
              <li>
                Improve accuracy and response time with machine learning-backed data retrieval
                and contextual understanding
              </li>
              <li>
                Reduce manual workload for HR teams by enabling AI to handle repetitive tasks,
                allowing focus on strategic initiatives
              </li>
              <li>
                Foster a seamless employee experience with fast, conversational interfaces
                built into your HRMS platform
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What’s New in the Latest HRMS Update
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              Conversational AI Chatbot for HR Support
            </h3>
            <p className="text-muted-foreground mb-6">
              Leverage a smart chatbot that understands employee intent and offers instant
              answers to frequently asked HR queries—from leave balances to company
              policies—in a natural, chat-based format.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              Voice-Enabled Interaction with Audio Recording Bot
            </h3>
            <p className="text-muted-foreground mb-6">
              Employees can now speak directly to the HRMS using an audio recording bot,
              simplifying actions like applying for leave or submitting feedback—particularly
              useful in mobile or on-the-go environments.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              Automated Request Handling and Workflow Triggering
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it’s a leave application or document request, AI automatically routes
              requests through the appropriate approval workflow, cutting down on manual
              processing time.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              Real-Time Insights and Behavior Analytics
            </h3>
            <p className="text-muted-foreground mb-6">
              Gain visibility into employee interaction patterns, identify common HR queries,
              and continuously improve the system with data-driven insights provided by AI.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              Seamless Integration with Existing Modules
            </h3>
            <p className="text-muted-foreground mb-6">
              All AI tools are fully integrated into the HRMS ecosystem, ensuring smooth
              workflows across leave management, employee onboarding, performance tracking,
              and more.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-muted-foreground mb-6">
              With the introduction of AI-powered tools like chatbots and voice interfaces, our
              HRMS is evolving into a smarter, more adaptive platform. These innovations not
              only improve HR service delivery but also enhance employee satisfaction by
              making HR interactions faster, easier, and more human-like.
            </p>
            <p className="text-muted-foreground mb-6">
              AI in HRMS is not just about automation—it’s about transforming how your people
              connect with HR, one intelligent interaction at a time.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our AI-powered HRMS helps businesses simplify HR, engage employees,
              and drive growth.
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
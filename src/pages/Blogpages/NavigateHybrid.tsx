import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";
import BackToBlog from "@/components/BackToBlog";

export default function HRMSBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <BackToBlog className="mb-10 mt-2" />

          <header className="mb-8">
            <Badge className="mb-4">HRMS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Navigating the Hybrid Workplace with HRMS: Strategies for HR and Managers
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Arathi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 16, 2025</span>
              </div>
              <span>4 min read</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="sm">Contact Us</Button>
              </Link>
            </div>
          </header>

          <div className="aspect-video rounded-lg mb-8 overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/hybrid-work-model-employees-working-home-office-isometric-flowchart_1284-61616.jpg"
              alt="Isometric flowchart depicting employees collaborating in a hybrid workplace with HRMS tools"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>



          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              The workplace has changed. Remote work, once seen as temporary, is now a key part of how businesses operate. Many organizations have shifted to a hybrid work model, blending both remote work and on-site work. For HR professionals, people managers, and team leaders, this shift brings both exciting possibilities and real challenges.
            </p>
            <p className="text-muted-foreground mb-6">
              How can we keep employee engagement, productivity, and collaboration high when teams are working from different locations? How do we build a strong, unified company culture that supports both remote and in-office employees? The goal is clear: create a workplace where employees feel connected, supported, and productive—no matter where they work from.
            </p>
            <p className="text-muted-foreground mb-6">
              In this blog, we’ll explore practical and people-first strategies to help you manage the hybrid workforce effectively, while building a strong and inclusive company culture.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Establish a Clear Hybrid Work Policy</h2>
            <p className="text-muted-foreground mb-6">
              A successful hybrid workplace starts with a well-defined and transparent hybrid work policy. HR teams should clearly outline employee expectations, roles, and responsibilities for both remote and in-office team members. This helps ensure consistency, fairness, and compliance across the organization.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Hybrid work schedules: fixed days or flexible arrangements</li>
              <li>Core working hours and employee availability guidelines</li>
              <li>Remote work setup requirements, including equipment and cybersecurity policies</li>
              <li>Use of time-tracking tools, attendance systems, or performance monitoring</li>
              <li>Clear reporting structures and team collaboration protocols</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Communicate With Clarity and Consistency</h2>
            <p className="text-muted-foreground mb-6">
              Strong communication is the backbone of every successful hybrid team. It ensures everyone whether working from home or in the office feels informed and involved.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Set some basic team communication norms—when to use email, chat, video calls, or in-person check-ins</li>
              <li>Share meeting agendas ahead of time, and record meetings so no one feels left out</li>
              <li>Use inclusive language, and make sure everyone gets a chance to speak</li>
              <li>Keep employees in the loop with regular updates about company goals, changes, and big wins</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Shift to Outcome-Based Performance Management</h2>
            <p className="text-muted-foreground mb-6">
              In the hybrid model, managers must focus less on how many hours an employee is seen working, and more on what they deliver.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Train managers in setting SMART goals</li>
              <li>Use OKRs (Objectives and Key Results) to measure output</li>
              <li>Implement performance review systems that are fair and transparent</li>
              <li>Provide continuous feedback, not just annual reviews</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Technology Plays a Big Role</h2>
            <p className="text-muted-foreground mb-6">
              Technology is essential in managing hybrid teams. From communication to productivity tracking and operations, the right technology can make a big difference.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Project management tools to assign tasks, track progress, and manage workflows</li>
              <li>Video conferencing solutions for virtual meetings and collaboration</li>
              <li>Document sharing platforms for easy access to files and real-time collaboration</li>
              <li>HR management systems to handle payroll, leave, onboarding, and employee data</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Build an Inclusive Hybrid Work Culture</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Celebrate wins across both in-office and remote staff</li>
              <li>Include remote employees in social events through virtual meetups</li>
              <li>Rotate meeting leadership and visibility roles</li>
              <li>Promote diversity, equity, and inclusion practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Focus on Employee Wellbeing and Work-Life Balance</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Encourage regular breaks and time off</li>
              <li>Introduce mental health programs or EAPs</li>
              <li>Offer flexible hours to manage family or health needs</li>
              <li>Train managers to spot signs of disengagement or overwork</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Make In-Office Time Purposeful</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Host team brainstorming sessions</li>
              <li>Offer in-person learning or coaching</li>
              <li>Organize casual lunches or team-building activities</li>
              <li>Encourage informal catch-ups that build trust</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Train Leaders to Manage Hybrid Teams</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Giving effective feedback virtually</li>
              <li>Managing team dynamics across locations</li>
              <li>Recognizing high performance fairly</li>
              <li>Handling conflict remotely</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Collect and Act on Employee Feedback</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Monthly or quarterly pulse surveys</li>
              <li>Virtual suggestion boxes or feedback channels</li>
              <li>One-on-one check-ins with managers</li>
              <li>Exit interviews and stay interviews</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Ensure Data Security and Compliance</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Use secure platforms and multi-factor authentication</li>
              <li>Provide training on data handling and phishing prevention</li>
              <li>Keep employee records and payroll data secure</li>
              <li>Update policies for device usage and access control</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Final Thoughts: HR at the Heart of the Hybrid Workplace</h2>
            <p className="text-muted-foreground mb-6">
              The hybrid workplace is more than just a split between working from home and the office. It’s a major shift in how we manage people, support employees, and build a healthy work culture. For hybrid work to succeed, companies need more than just flexible schedules they need strong HR strategies focused on people.
            </p>

          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our HRMS helps businesses simplify HR, engage employees, and drive growth.
            </p>
            <Link to="/resources/blogs">
              <Button size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

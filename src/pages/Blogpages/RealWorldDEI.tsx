import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import BackToBlog from "@/components/BackToBlog";
import BlogActions from "@/components/BlogActions";

export default function DEIBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <BackToBlog className="mb-10 mt-2" />

          <header className="mb-8">
            <Badge className="mb-4">DEI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real World DEI: Actions That Drive Inclusion, Equity & Diversity
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Aiswarya K</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 08, 2025</span>
              </div>
              <span>8 min read</span>
            </div>

            <BlogActions title="Real World DEI: Actions That Drive Inclusion, Equity & Diversity" />
          </header>

          <div className="aspect-video rounded-lg mb-8 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1465567206/photo/employees-must-complete-the-online-survey-form-answer-the-test-questions-marked-checklist-on.jpg?s=612x612&w=0&k=20&c=-Bi6zawuIjLis42Kq3BHzz5DtsV8vd7OQyHg811L0qQ="
              alt="Diversity, Equity, and Inclusion in the Workplace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              In recent years, many companies talk about Diversity, Equity, and Inclusion (DEI or DEIB). DEI means action changing how things work, who is included, and how fair the system is for everyone. In this blog, we’ll explain what real DEI looks like, how to measure it, how to set meaningful KPIs and dashboards, and why it matters for people, companies, and society.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              1. What Real DEI Looks Like
            </h2>
            <p className="text-muted-foreground mb-6">
              Real DEI is more than a promise or a slogan. It shows up in three big areas:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Representation:</strong> Making sure people from different backgrounds, genders, races, ages, abilities, etc., are present at all levels from entry jobs to leadership. When the people in charge are all the same, they often make unfair choices without meaning to.</li>
              <li><strong>Fairness (Equity):</strong> Not everyone starts at the same place. Equity means giving people the support they need to succeed—like fair promotions, training, or mentoring. It also means fixing bias in hiring, pay, and opportunities.</li>
              <li><strong>Inclusive Policies & Practice:</strong> Inclusion means everyone feels they belong and can be themselves at work. It’s about things like flexible hours, support for different needs, anti-harassment rules, and safe ways to speak up. It’s about listening to people.</li>
              <li><strong>Belonging:</strong> Often part of DEIB, belonging means people feel like they’re truly part of the team, respected, and valued—they don’t feel different.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              2. Measuring DEI: Why and How
            </h2>
            <p className="text-muted-foreground mb-6">
              You can’t improve what you can’t measure. Measuring helps you know where you are now, where you want to go, and whether your actions are working.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Why measure DEI?</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Find gaps</li>
              <li>Check if policies work</li>
              <li>Hold leaders accountable</li>
              <li>Build trust by showing real change</li>
              <li>Attract and keep diverse talent</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              <strong>What to measure:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Who’s in the company (gender, race, age, etc.)</li>
              <li>Who’s applying, hired, and promoted</li>
              <li>Fair pay for equal work</li>
              <li>Who stays or leaves and why</li>
              <li>How included and supported people feel</li>
              <li>Who gets training and growth opportunities</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Measuring helps make DEI real and meaningful.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              3. Setting KPIs & Dashboards for DEI
            </h2>
            <p className="text-muted-foreground mb-6">
              KPIs are clear, measurable goals to track DEI progress. Dashboards show this data visually, helping you see how you’re doing over time.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Good KPIs are:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Specific (e.g., “Increase women in leadership from 20% to 35% in 2 years”)</li>
              <li>Measurable with data</li>
              <li>Realistic but challenging</li>
              <li>Relevant to your goals and context</li>
              <li>Time-bound with deadlines</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              <strong>Example KPIs:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>% of underrepresented groups in leadership</li>
              <li>Pay gaps between groups doing similar work</li>
              <li>% of diverse candidates in final interviews</li>
              <li>Turnover rates by group grouped</li>
              <li>Inclusion survey scores</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              <strong>Dashboards should:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Use simple, clear visuals (charts, graphs)</li>
              <li>Break data down by group (gender, race, etc.)</li>
              <li>Show progress over time</li>
              <li>Include benchmarks for comparison</li>
              <li>Be shared openly to build trust</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              This makes DEI progress easy to track and understand.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              4. Steps to Move from Lip Service to Real DEI
            </h2>
            <p className="text-muted-foreground mb-6">
              Here are steps companies can take to make DEI real:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-6">
              <li><strong>Start at the Top:</strong> Leaders must truly support DEI—not just in words, but with budget, time, and accountability.</li>
              <li><strong>Know Where You Stand:</strong> Collect data on things like team diversity, pay gaps, and employee experiences. You can’t improve what you don’t measure.</li>
              <li><strong>Set Clear Goals:</strong> Based on the data, create specific, trackable goals. For example: make hiring panels more diverse or close pay gaps.</li>
              <li><strong>Build Inclusive Systems:</strong> Update how you hire, promote, and support people. Use tools like blind resume reviews, mentorships, flexible work options, and ongoing DEI training.</li>
              <li><strong>Track Progress:</strong> Check in regularly. Use dashboards and reports to see what’s working and what’s not.</li>
              <li><strong>Listen & Improve:</strong> Use surveys or listening sessions to hear directly from employees. Be open about what you learn and what you’ll change.</li>
              <li><strong>Make It Matter:</strong> Hold leaders and managers accountable. Tie DEI goals to performance reviews or rewards when it makes sense.</li>
              <li><strong>Celebrate & Keep Going:</strong> Recognize progress and people doing the work. DEI is ongoing—keep learning and adapting.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              5. Why Real DEI Matters
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Better Ideas:</strong> Different people bring different views. That leads to more creativity and better decisions.</li>
              <li><strong>Happier People Stay Longer:</strong> When people feel respected and included, they enjoy their work more and they’re more likely to stick around.</li>
              <li><strong>Helps Attract Good People:</strong> Job seekers, customers, and partners care about fairness. A strong DEI culture makes your company more attractive.</li>
              <li><strong>Better Business Results:</strong> Companies with diverse teams often do better—especially when leadership is diverse too.</li>
              <li><strong>It’s the Right Thing to Do:</strong> Everyone deserves to be treated fairly and feel like they belong. It’s about respect, equality, and doing what’s right.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              6. Sample Dashboard Structure
            </h2>
            <p className="text-muted-foreground mb-6">
              Here’s how a simple DEI dashboard could be organized. You can adapt to your company size and needs.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Dashboard Title:</strong> DEI / DEIB Progress Report
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Sections & Metrics:</strong>
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-6">
              <li><strong>Representation:</strong>
                <ul className="list-disc pl-6">
                  <li>% Women / Men in total workforce</li>
                  <li>% Women / Men in leadership roles</li>
                  <li>% Employees from under-represented ethnicities / racial groups in workforce and leadership</li>
                  <li>% Employees with disabilities</li>
                </ul>
              </li>
              <li><strong>Recruitment & Hiring:</strong>
                <ul className="list-disc pl-6">
                  <li>Number of applicants by group</li>
                  <li>% Diverse candidates shortlisted</li>
                  <li>% Diverse candidates offered roles</li>
                </ul>
              </li>
              <li><strong>Retention & Turnover:</strong>
                <ul className="list-disc pl-6">
                  <li>Overall turnover rate vs turnover by group</li>
                  <li>New hires still in job after 1 year, by group</li>
                </ul>
              </li>
              <li><strong>Pay Equity:</strong>
                <ul className="list-disc pl-6">
                  <li>Average salary by group for similar levels / roles</li>
                  <li>Pay gap (gender, ethnicity, etc.)</li>
                </ul>
              </li>
              <li><strong>Inclusion & Employee Experience:</strong>
                <ul className="list-disc pl-6">
                  <li>Survey scores: “I feel included”, “I can be myself at work”, “I feel my opinion matters”</li>
                  <li>Number of discrimination or bias complaints / incidents</li>
                </ul>
              </li>
              <li><strong>Learning & Development:</strong>
                <ul className="list-disc pl-6">
                  <li>% Employees from under-represented groups in mentorship / leadership training</li>
                  <li>Participation in DEI trainings</li>
                </ul>
              </li>
            </ol>
            <p className="text-muted-foreground mb-6">
              <strong>Visuals:</strong> For each, use line graphs (to show progress over time), bar charts (to compare groups), and pie charts (for composition). Green / yellow / red indicators can show whether you are on track to meet targets.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              7. Challenges & How to Overcome Them
            </h2>
            <p className="text-muted-foreground mb-6">
              DEI work is not easy. Here are common challenges and ways to address them:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Data gaps, incomplete records (people may not want to share):</strong> Make data collection voluntary, explain purpose, ensure privacy / anonymity.</li>
              <li><strong>Pushback or resistance:</strong> Educate, communicate reasons clearly; show benefits; involve people in DEI work, get champions.</li>
              <li><strong>Unconscious bias persists:</strong> Provide bias training; implement structured processes (interviews, performance reviews).</li>
              <li><strong>Slow progress / small wins:</strong> Celebrate small steps; set both short term and long term goals; stay consistent.</li>
              <li><strong>Tokenism (only symbolic diversity):</strong> Focus on deeper change: policies, culture, decision making, power structures.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-muted-foreground mb-6">
              DEI isn’t just about saying the right things. It’s about what a company does every day:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Bringing in people from all kinds of backgrounds—and making sure they’re represented at every level</li>
              <li>Making sure policies and systems are truly fair, not just “one-size-fits-all”</li>
              <li>Creating a workplace where people feel safe, respected, and free to be themselves</li>
              <li>Being honest about where things stand—and using real data to track progress</li>
              <li>Setting clear goals and staying accountable to them</li>
              <li>Having leaders who are genuinely involved and take responsibility</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              When companies move beyond talk and take real action, great things happen: people are happier, ideas are more creative, the company’s reputation grows—and everyone gets to work in a fairer, more inclusive place.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our HRMS supports DEI initiatives, fosters inclusion, and drives equitable growth.
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
 
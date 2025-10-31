import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileAppSecurityBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/resources/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <Badge className="mb-4">HRMS Security</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mobile App Updates: Enhanced Security Features and Data Protection for HRMS
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Aiswarya</span>
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
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=" Mobile App Security"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>


          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest mobile HRMS app security updates engineered to safeguard workforce data and deliver seamless, secure HR management from any device, anywhere. These features are designed for businesses that demand airtight employee data security, robust payroll management, and risk-free digital HR operations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🔒 Key Security Enhancements</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Biometric authentication (Fingerprint, Face ID) and robust multi-factor authentication (MFA) for secure access to payroll and employee records</li>
              <li>End-to-end encryption securing HR, payroll, and analytics data in transit and at rest</li>
              <li>Role-based access control (RBAC) ensuring only verified users manage sensitive information</li>
              <li>Real-time security alerts, anomaly detection, and suspicious activity monitoring</li>
              <li>Compliance management for GDPR, HIPAA, India DPDP, and global data privacy regulations with automated audit logs</li>
              <li>Secure cloud-based mobile HRMS access with geo-fencing and location-based controls</li>
              <li>Employee self-service portal with protected access to payslips, tax forms, leave requests, and personal data</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Experience the next-generation secure mobile HRMS app—combining biometric login, data encryption, and rigorous compliance controls—to drive HR efficiency, prevent payroll fraud, and protect every aspect of your workforce data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🚀 What’s New in This Update</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Biometric Authentication & MFA:</strong> Fingerprints, facial recognition, and MFA for highest mobile HR security.</li>
              <li><strong>Strong Data Encryption:</strong> Industry-standard AES and SSL/TLS protection against cyber threats.</li>
              <li><strong>Role-Based Permissions:</strong> Granular access controls across payroll, benefits, and employee records.</li>
              <li><strong>Security Alerts & Monitoring:</strong> Instant detection of unauthorized access or suspicious mobile activity.</li>
              <li><strong>Compliance Tools:</strong> Automated documentation for GDPR, HIPAA, and other global privacy regulations.</li>
              <li><strong>Geo-Fencing & Location Security:</strong> Restrict app usage to safe regions, preventing foreign access risks.</li>
              <li><strong>Mobile HR Analytics Security:</strong> Confidential dashboards and insights with strict access safeguards.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
            <p className="text-muted-foreground mb-6">
              With these security enhancements, the HRMS mobile app provides organizations with a resilient platform for safe workforce management. From encrypted payroll data to real-time anomaly detection, businesses can operate confidently knowing their HR operations are secure anywhere, anytime.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Secure Your Workforce Data with OfficeKit
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our advanced HRMS mobile app features keep employee and payroll data safe, compliant, and fraud-free.
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

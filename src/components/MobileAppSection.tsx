import { 
  Clock, 
  FileText, 
  User, 
  Calendar, 
  MessageCircle, 
  BarChart3,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileAppSection = () => {
  const appFeatures = [
    {
      icon: Clock,
      title: "Work Entry",
      description: "Log work hours on the go"
    },
    {
      icon: FileText,
      title: "Salary Slip",
      description: "Access and download anytime"
    },
    {
      icon: User,
      title: "Employee Self Service",
      description: "Manage personal details, documents"
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Real-time clock in/out"
    },
    {
      icon: MessageCircle,
      title: "Communication Hub",
      description: "Stay updated with announcements"
    },
    {
      icon: BarChart3,
      title: "Reports and Analytics",
      description: "View personalized dashboards"
    }
  ];

  const MobileMockup = () => (
    <div className="relative mx-auto w-64">
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-strong">
        <div className="bg-background rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-primary text-primary-foreground px-6 py-4 text-xs font-medium flex justify-between items-center">
            <span>9:41 AM</span>
            <span>OfficeKit</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-primary-foreground rounded-sm"></div>
              <div className="w-1 h-2 bg-primary-foreground rounded-sm"></div>
            </div>
          </div>
          
          {/* App Content */}
          <div className="p-6 space-y-4">
            {/* Welcome Section */}
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Welcome back, John!</h3>
              <p className="text-sm text-muted-foreground">Ready to start your day?</p>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 text-green-700 rounded-xl p-3 text-center">
                <Clock className="h-6 w-6 mx-auto mb-1" />
                <div className="text-xs font-medium">Clock In</div>
              </div>
              <div className="bg-blue-50 text-blue-700 rounded-xl p-3 text-center">
                <FileText className="h-6 w-6 mx-auto mb-1" />
                <div className="text-xs font-medium">Payslip</div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-foreground">Recent Activity</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Clocked in at 9:00 AM</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Leave approved</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="flex justify-around pt-4 border-t border-border">
              {[User, Calendar, BarChart3, MessageCircle].map((Icon, i) => (
                <Icon 
                  key={i}
                  className={`h-5 w-5 ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 shadow-medium animate-bounce">
        <MessageCircle className="h-4 w-4" />
      </div>
      <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-2 shadow-medium animate-pulse">
        <BarChart3 className="h-4 w-4" />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            HR in Your Pocket
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected and in control with OfficeKit's powerful mobile app — for employees and managers alike.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mobile Mockup */}
          <div className="section-fade-in text-center lg:text-left">
            <MobileMockup />
          </div>

          {/* Features */}
          <div className="section-fade-in space-y-8">
            <div className="grid gap-6">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="btn-cta group flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
              <Button className="btn-outline group flex-1">
                <Download className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
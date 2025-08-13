// import { Users, Clock, DollarSign, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const FeaturesSection = () => {
//   const featureSections = [
//     {
//       title: "Hire & Onboard",
//       description: "Manage the complete employee journey — from recruitment to exit.",
//       features: [
//         "Recruitment Management",
//         "Self-Service Portal", 
//         "Exit Management"
//       ],
//       icon: Users,
//       color: "text-blue-600",
//       bg: "bg-blue-50",
//       image: "recruitment",
//       reverse: false
//     },
//     {
//       title: "Workforce & Productivity",
//       description: "Track presence, manage attendance, and empower employees to manage their data.",
//       features: [
//         "Attendance & Leave",
//         "Mobile App"
//       ],
//       icon: Clock,
//       color: "text-green-600", 
//       bg: "bg-green-50",
//       image: "attendance",
//       reverse: true
//     },
//     {
//       title: "Payroll & Performance",
//       description: "Ensure accurate payroll, automate compliance, and build a culture of performance.",
//       features: [
//         "Payroll & Compliance",
//         "Performance Appraisal"
//       ],
//       icon: DollarSign,
//       color: "text-purple-600",
//       bg: "bg-purple-50", 
//       image: "payroll",
//       reverse: false
//     }
//   ];

//   const FeatureImage = ({ type }: { type: string }) => {
//     const mockups = {
//       recruitment: (
//         <div className="bg-card rounded-2xl shadow-medium p-6 border border-border">
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <h4 className="font-semibold">Candidate Pipeline</h4>
//               <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">12 New</span>
//             </div>
//             {["Applied", "Screening", "Interview", "Offer"].map((stage, i) => (
//               <div key={stage} className="flex items-center justify-between py-2 border-b border-border last:border-0">
//                 <span className="text-sm text-muted-foreground">{stage}</span>
//                 <span className="text-sm font-medium">{[45, 23, 12, 5][i]}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//       attendance: (
//         <div className="bg-card rounded-2xl shadow-medium p-6 border border-border">
//           <div className="space-y-4">
//             <h4 className="font-semibold">Attendance Overview</h4>
//             <div className="grid grid-cols-7 gap-2">
//               {Array.from({length: 21}, (_, i) => (
//                 <div
//                   key={i}
//                   className={`h-8 rounded-md flex items-center justify-center text-xs font-medium ${
//                     i % 7 === 0 || i % 7 === 6 
//                       ? 'bg-muted text-muted-foreground' 
//                       : Math.random() > 0.2 
//                         ? 'bg-green-100 text-green-700' 
//                         : 'bg-red-100 text-red-700'
//                   }`}
//                 >
//                   {i + 1}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-green-600">Present: 18 days</span>
//               <span className="text-red-600">Absent: 3 days</span>
//             </div>
//           </div>
//         </div>
//       ),
//       payroll: (
//         <div className="bg-card rounded-2xl shadow-medium p-6 border border-border">
//           <div className="space-y-4">
//             <h4 className="font-semibold">Payroll Summary</h4>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-sm text-muted-foreground">Gross Salary</span>
//                 <span className="font-medium">₹75,000</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-muted-foreground">Deductions</span>
//                 <span className="font-medium text-red-600">₹8,500</span>
//               </div>
//               <div className="border-t border-border pt-2">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Net Salary</span>
//                   <span className="font-bold text-green-600">₹66,500</span>
//                 </div>
//               </div>
//             </div>
//             <Button className="w-full btn-cta">Download Payslip</Button>
//           </div>
//         </div>
//       )
//     };

//     return mockups[type as keyof typeof mockups] || mockups.recruitment;
//   };






//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 section-fade-in">
//           <h2 className="text-4xl font-bold text-foreground mb-6">
//             Everything You Need for Better HR
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             All-in-one HRMS platform to manage your people, processes, and payroll — efficiently and effectively.
//           </p>
//         </div>

//         <div className="space-y-24">
//           {featureSections.map((section, index) => {
//             const Icon = section.icon;
//             return (
//               <div
//                 key={index}
//                 className={`grid lg:grid-cols-2 gap-12 items-center ${section.reverse ? 'lg:grid-flow-col-dense' : ''}`}
//               >
//                 {/* Content */}
//                 <div className={`section-fade-in ${section.reverse ? 'lg:col-start-2' : ''}`}>
//                   <div className={`${section.bg} ${section.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
//                     <Icon className="h-8 w-8" />
//                   </div>

//                   <h3 className="text-3xl font-bold text-foreground mb-4">
//                     {section.title}
//                   </h3>

//                   <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                     {section.description}
//                   </p>

//                   <ul className="space-y-3 mb-8">
//                     {section.features.map((feature, i) => (
//                       <li key={i} className="flex items-center space-x-3">
//                         <div className="w-2 h-2 rounded-full bg-primary"></div>
//                         <span className="text-foreground font-medium">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Link to="/features">
//                     <Button className="btn-outline group">
//                       Explore Features
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Image */}
//                 <div className={`section-fade-in ${section.reverse ? 'lg:col-start-1' : ''}`}>
//                   <FeatureImage type={section.image} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default () => {
  const hiringFeatures = [
    "Recruitment Management",
    "Self-Service Portal",
    "Exit Management"
  ];

  const workFeatures = [
    "Attendance Tracking",
    "Leave Management",
    "Mobile App Integration",
    "Remote Work Support"
  ];

  const payrollFeatures = [
    "Payroll & Compliance",
    "Performance Appraisal"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          {/* <Badge className="bg-white mb-4 text-[#3f5ffc] border border-[#ededed] hover:bg-white"  >
            Features
          </Badge> */}
                          <Badge className="bg-white font-normal py-2  text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent"  >
                 Features
                </Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-6">
            Everything You Need <br /> for <span className="leading-snug gradient-text"  >Better HR</span>
          </h2>
        </div>
        {/* Features Grid */}
        <div className="space-y-40">
          {/* Hiring & Onboarding */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Hiring & Onboarding
                </h3>
                <p className="text-hr-text-secondary text-lg leading-normal mb-8">
                  From attracting top talent to managing exits with grace, our suite ensures a seamless employee journey.
                  Handle every step with ease streamline recruitment pipelines, enable employees with intuitive self-service tools,
                  and manage offboarding with professionalism.
                </p>
              </div>

              <div className="space-y-4">
                {hiringFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2463EB] flex-shrink-0" />
                    <span className="text-hr-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-[80%] rounded-2xl h-auto bg-gradient-card shadow-medium flex items-center justify-center">
                  <img className="rounded-2xl" src="/public/img01.png" alt="" />
              </div>
            </div>
          </div>

          {/* Work Management */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-[80%] rounded-2xl h-auto bg-gradient-card shadow-medium flex items-center justify-center">
                  <img className="rounded-2xl" src="/public/img02.png" alt="" />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Work Management
                </h3>
                <p className="text-hr-text-secondary text-lg leading-normal mb-8">
                  Keep your workforce connected and productive. With robust attendance and leave management tools -
                  backed by a powerful mobile app - your team can mark, track, and manage time effortlessly,
                  whether in-office or remote.
                </p>
              </div>

              <div className="space-y-4">
                {workFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2463EB] flex-shrink-0" />
                    <span className="text-hr-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Payroll & Performance
                </h3>
                <p className="text-hr-text-secondary text-lg leading-normal mb-8">
                  Ensure timely, compliant payroll and drive a culture of growth. Automate compensation, meet legal standards, and run streamlined appraisals that support employee development and organizational goals.
                </p>
              </div>

              <div className="space-y-4">
                {payrollFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2463EB] flex-shrink-0" />
                    <span className="text-hr-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-[80%] rounded-2xl h-auto bg-gradient-card shadow-medium flex items-center justify-center">
                  <img className="rounded-2xl" src="/public/img01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


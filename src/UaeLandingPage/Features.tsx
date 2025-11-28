"use client"

import React, { useState } from "react"
import { Users, CreditCard, UserPlus, Headphones, BarChart3, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FeatureItem {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  details: string[]
}

const featureData: FeatureItem[] = [
  {
    title: "Workforce",
    description: "All tools your employees and managers use every day — unified.",
    icon: Users,
    details: [
      "Face Recognition Attendance",
      "Leave & Time-Off Tracking",
      "Shift & Scheduling",
      "Mobile Check-In/Out",
      "Real-time workforce insights",
    ],
  },
  {
    title: "Payroll",
    description: "Run payroll with confidence—accurate, fast, and compliant.",
    icon: CreditCard,
    details: [
      "Automated salary processing",
      "Statutory compliance (PF, ESI)",
      "WPS SIF File Generation",
      "One-click payslips",
      "Reports & challans auto-generated",
    ],
  },
  {
    title: "Talent",
    description: "Manage the entire employee journey inside one system.",
    icon: UserPlus,
    details: [
      "Digital onboarding",
      "Document management (Visa/ID)",
      "Task & checklist automation",
      "Performance reviews (OKR/KRA)",
      "Competency & goal tracking",
    ],
  },
  {
    title: "Operations",
    description: "Make internal communication smooth and hassle-free.",
    icon: Headphones,
    details: [
      "Employee self-service (ESS)",
      "Manager self-service (MSS)",
      "HR helpdesk tickets",
      "Automated escalations",
      "Policy repository",
    ],
  },
  {
    title: "Intelligence",
    description: "Turn data into direction for better decisions.",
    icon: BarChart3,
    details: [
      "Executive Dashboards",
      "Attrition Analytics",
      "Absence Heatmaps",
      "Cost-to-Company Analysis",
      "Export-ready reports",
    ],
  },
]

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OfficeKit HR: The Complete Suite</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From hiring to retiring, we cover every aspect of the employee lifecycle with precision and ease.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {featureData.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
                  activeFeature === index
                    ? "bg-white shadow-md border-l-4 border-blue-600"
                    : "bg-white hover:bg-gray-50 text-gray-600 border-l-4 border-transparent"
                }`}
              >
                <feature.icon
                  size={24}
                  className={`transition-colors ${activeFeature === index ? "text-blue-600" : "text-gray-400"}`}
                />
                <div>
                  <h3
                    className={`font-bold transition-colors ${activeFeature === index ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 hidden sm:block truncate w-40">{feature.description}</p>
                </div>
                <ChevronRight
                  className={`ml-auto transition-all ${activeFeature === index ? "translate-x-1 text-blue-600" : "opacity-0"}`}
                  size={16}
                />
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-md p-8 md:p-12 border border-blue-100 flex flex-col justify-center min-h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {React.createElement(featureData[activeFeature].icon, { className: "text-blue-600 w-7 h-7" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{featureData[activeFeature].title} Management</h3>
                <p className="text-gray-600 mb-8 text-lg">{featureData[activeFeature].description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {featureData[activeFeature].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700 font-medium text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

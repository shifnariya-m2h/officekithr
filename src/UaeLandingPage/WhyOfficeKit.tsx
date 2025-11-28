"use client"

import type React from "react"
import { ShieldCheck, Banknote, FileCheck2, Settings2, Bot, Check } from "lucide-react"
import { motion } from "framer-motion"

const WhyOfficeKit: React.FC = () => {
  const benefits = [
    { text: "Compliance-first architecture (UAE Labour Law, DIFC, Free-Zones)", icon: ShieldCheck },
    { text: "Automated Gratuity, Leave Salary, EOS & Repatriation rules", icon: Banknote },
    { text: "WPS-ready payroll producing SIF files accepted by banks", icon: FileCheck2 },
    { text: "Flexible policies for unique ticket & air passage structures", icon: Settings2 },
    { text: "AI-powered assistance for instant employee answers", icon: Bot },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Built from the ground up for <span className="text-blue-600">UAE HR Realities</span>.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              HR in the UAE isn't like anywhere else. It comes with its own labour laws, banking formats, free-zone
              variations, and immigration requirements.
            </p>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm">
              <p className="text-gray-700 text-lg">
                Most HRMS platforms simply customize global features. <br />
                <strong className="text-blue-700">OfficeKit does the opposite.</strong>
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center mt-1">
                    <item.icon size={20} className="text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2 w-full relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white p-8"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">EOS Settlement</h3>
                  <p className="text-gray-500 text-sm">Employee: Ahmed Al-Farsi</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <Check size={12} /> Ready
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Basic Salary</span>
                  <span className="text-gray-900 font-mono font-medium">AED 15,000.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Gratuity (5 Years)</span>
                  <span className="text-gray-900 font-mono font-medium">AED 56,250.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Leave Encashment (12 days)</span>
                  <span className="text-gray-900 font-mono font-medium">AED 6,000.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Repatriation Ticket</span>
                  <span className="text-gray-900 font-mono font-medium">AED 1,200.00</span>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-blue-600">Net Payable</span>
                  <span className="text-gray-900 font-mono">AED 78,450.00</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 flex gap-3 border border-blue-100">
                <Bot className="text-blue-600 shrink-0" size={24} />
                <div>
                  <p className="text-gray-600 text-sm italic">
                    "Calculated based on Mainland Limited Contract rules (21 days for first 5 years). No deductions
                    found."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyOfficeKit

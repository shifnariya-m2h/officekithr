"use client"

import { AlertTriangle, FileWarning, Calculator, Plane, HelpCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  { title: "WPS Rejections", desc: "One wrong field = delayed salaries + penalties", icon: FileWarning, color: "red" },
  {
    title: "Jurisdiction Chaos",
    desc: "Mainland vs DIFC vs Free Zone — different rules",
    icon: AlertTriangle,
    color: "amber",
  },
  { title: "Gratuity Errors", desc: "Excel mistakes cost trust and thousands", icon: Calculator, color: "blue" },
  { title: "Repatriation Mess", desc: "Manual tracking = surprise expenses", icon: Plane, color: "sky" },
  { title: "Endless Queries", desc: "Leave balance questions waste your time", icon: HelpCircle, color: "purple" },
  { title: "EOS Delays", desc: "HR + Payroll + Finance silos slow everything", icon: Clock, color: "orange" },
]

const PainPoints = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            UAE HR Is Broken.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              OfficeKit Fixes It.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No more spreadsheets, no more rejections, no more stress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-blue-50"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors`}
              >
                <c.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainPoints

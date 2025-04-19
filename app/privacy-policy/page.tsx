'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email address, phone number)",
        "Communication preferences and session bookings",
        "Payment information (processed securely through our payment partners)",
        "Usage data and analytics",
        "Cookies and similar technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our communication training services",
        "To personalize your experience and content",
        "To process your bookings and payments",
        "To send important updates about our services",
        "To analyze and improve our website performance"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell your personal information",
        "Information shared only with service providers who assist our operations",
        "May share anonymous, aggregated data for analytics",
        "Legal requirements and business transfers"
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access and update your personal information",
        "Opt-out of marketing communications",
        "Delete your account and data",
        "Cookie preferences management",
        "Contact us for privacy concerns"
      ]
    },
    {
      title: "Data Security",
      content: [
        "Industry-standard security measures",
        "Regular security assessments",
        "Encrypted data transmission",
        "Limited access to personal information",
        "Incident response procedures"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At बात Shala, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{section.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@baatshala.com" className="text-yellow-600 hover:text-yellow-700">
                  privacy@baatshala.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

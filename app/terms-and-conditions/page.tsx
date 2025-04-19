'use client';

import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using बात Shala's services, you agree to these terms",
        "Terms may be updated periodically, please review regularly",
        "Continued use constitutes acceptance of updated terms",
        "If you disagree with these terms, please discontinue use of our services"
      ]
    },
    {
      title: "Service Description",
      content: [
        "Communication training and coaching services",
        "Online booking and scheduling system",
        "Digital content and resources",
        "Virtual and in-person sessions",
        "Assessment and feedback tools"
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information",
        "Maintain confidentiality of account credentials",
        "Comply with booking and cancellation policies",
        "Respect intellectual property rights",
        "Follow community guidelines and code of conduct"
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Fees are as listed on our website",
        "Payment is required before service delivery",
        "Refund policy for cancellations",
        "Secure payment processing through authorized partners",
        "Price changes will be notified in advance"
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content and materials are our property",
        "Limited license for personal, non-commercial use",
        "No reproduction or distribution without permission",
        "Respect for trademarks and copyrights",
        "User-generated content guidelines"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Services provided 'as is' without warranties",
        "No guarantee of specific results",
        "Limited liability for damages",
        "Force majeure conditions",
        "Indemnification requirements"
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
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">Terms and Conditions</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to बात Shala. These Terms and Conditions govern your use of our services. 
              Please read them carefully before proceeding.
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
                For any questions about these Terms and Conditions, please contact us at:{" "}
                <a href="mailto:legal@baatshala.com" className="text-yellow-600 hover:text-yellow-700">
                  legal@baatshala.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

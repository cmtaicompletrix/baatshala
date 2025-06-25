'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const WebinarPage = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-50 via-white to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 py-24 rounded-b-3xl shadow-lg overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">
                            <div className="bg-white/90 rounded-3xl shadow-xl border border-yellow-100 p-10 md:p-12 flex flex-col items-start">
                                <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-yellow-300">UPCOMING WEBINAR</span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Digital Transformation in Modern Business</h1>
                                <p className="text-xl mb-8 text-gray-700">Join industry experts as they discuss strategies for successful digital transformation in today's competitive landscape.</p>
                                {/* Registration Form (hidden on md+, shown below on md+) */}
                                <div className="block md:hidden w-full">
                                    {/* Registration Form will be rendered below for md+ */}
                                    <RegistrationForm />
                                </div>
                            </div>
                        </div>
                        {/* Registration Form (shown on md+) */}
                        <div className="hidden md:block w-full md:w-1/2">
                            <div className="bg-white/95 p-8 rounded-2xl shadow-2xl border border-yellow-200 max-w-lg mx-auto w-full">
                                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Register for the Webinar</h3>
                                <RegistrationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-50 via-white to-white rounded-3xl mt-[-2rem] z-10 relative shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">About This Webinar</h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            In this exclusive webinar, we'll explore the latest trends and strategies in digital transformation.
                            Learn how leading companies are leveraging technology to gain competitive advantage and drive business growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-yellow-700 text-xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Industry Insights</h3>
                            <p className="text-gray-600">Gain valuable insights from industry leaders on the latest digital transformation trends.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-yellow-700 text-xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Practical Strategies</h3>
                            <p className="text-gray-600">Learn actionable strategies you can implement immediately to drive digital transformation.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-yellow-700 text-xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Networking</h3>
                            <p className="text-gray-600">Connect with peers and industry experts to expand your professional network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Barriers & Impact Section */}
            <section className="py-16 bg-gradient-to-b from-yellow-50 via-white to-white rounded-3xl shadow-md mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10 text-yellow-600 font-medium">Barriers & Impact</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Barriers to Digital Transformation & Their Impact</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Understand the common challenges organizations face in their digital journey and the transformative impact of overcoming them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Barrier 1 */}
                        <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.02] transition-transform border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-2xl">🚧</span>
                                </div>
                                <h3 className="text-xl font-bold text-purple-700">Resistance to Change</h3>
                            </div>
                            <p className="text-gray-700 mb-2">Employees and leaders may resist new technologies and processes.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">Impact: Slow Adoption</span>
                            </div>
                        </div>
                        {/* Barrier 2 */}
                        <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.02] transition-transform border border-yellow-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-2xl">💸</span>
                                </div>
                                <h3 className="text-xl font-bold text-yellow-700">Budget Constraints</h3>
                            </div>
                            <p className="text-gray-700 mb-2">Limited financial resources can hinder investment in digital tools and training.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">Impact: Missed Opportunities</span>
                            </div>
                        </div>
                        {/* Barrier 3 */}
                        <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.02] transition-transform border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-700">Security Concerns</h3>
                            </div>
                            <p className="text-gray-700 mb-2">Fear of data breaches and cyber threats can delay digital initiatives.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">Impact: Risk Aversion</span>
                            </div>
                        </div>
                        {/* Barrier 4 */}
                        <div className="bg-gradient-to-r from-rose-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.02] transition-transform border border-rose-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-2xl">🧩</span>
                                </div>
                                <h3 className="text-xl font-bold text-rose-700">Skill Gaps</h3>
                            </div>
                            <p className="text-gray-700 mb-2">Lack of digital skills and training among staff can impede progress.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-rose-100 text-rose-700 text-xs px-3 py-1 rounded-full font-semibold">Impact: Low Productivity</span>
                            </div>
                        </div>
                    </div>
                    {/* Impact Statement */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">The Positive Impact of Overcoming Barriers</h3>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                            Organizations that address these barriers experience faster innovation, improved efficiency, stronger security, and a more empowered workforce—unlocking the full potential of digital transformation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Faster Innovation</span>
                            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">Greater Efficiency</span>
                            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">Stronger Security</span>
                            <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-semibold">Empowered Workforce</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-50 via-white to-white mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Speakers</h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Learn from industry leaders with years of experience in digital transformation and business innovation.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 mt-12">
                        {/* Speaker 1 */}
                        <div className="bg-white/80 rounded-xl max-w-md overflow-hidden shadow-lg border border-yellow-100">
                            <div className="relative h-96">
                                <Image src="/images/Image21.jpg" alt="Shailesh Sinha" fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1 text-yellow-800">Shailesh Sinha</h3>
                                <p className="text-yellow-600 mb-3">Founder, CEO</p>
                                <p className="text-gray-600 mb-4">
                                    Shailesh Sinha is the founder and CEO of BaatShala, a leading provider of digital transformation solutions.
                                </p>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-gray-500 hover:text-yellow-600">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-yellow-600">
                                        <FaTwitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gradient-to-b from-yellow-50 via-white to-white rounded-3xl shadow-md mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our webinar.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">How do I register for the webinar?</h3>
                            <p className="text-gray-600">You can register directly on this page using the registration form at the top. Complete the form and make the payment to secure your spot.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Is there a fee to attend the webinar?</h3>
                            <p className="text-gray-600">Yes, the registration fee is ₹199. Payment is securely processed via Razorpay.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">What will I learn in this webinar?</h3>
                            <p className="text-gray-600">You'll learn the latest trends, strategies, and practical insights for digital transformation, as well as how to overcome common barriers.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Who should attend this webinar?</h3>
                            <p className="text-gray-600">This webinar is ideal for business owners, professionals, students, and anyone interested in digital transformation and business growth.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">What if I miss the live session?</h3>
                            <p className="text-gray-600">All registered participants will receive a recording of the webinar after the event.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Can I ask questions during the webinar?</h3>
                            <p className="text-gray-600">Yes! You can submit your questions in advance during registration or ask them live during the Q&A session.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Who is the speaker?</h3>
                            <p className="text-gray-600">The webinar is led by Shailesh Sinha, Founder & CEO of BaatShala, an expert in digital transformation.</p>
                        </div>
                        <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-yellow-100">
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">What if my payment fails or I face issues?</h3>
                            <p className="text-gray-600">If your payment fails, you can try again. For any issues, contact our support team.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// RegistrationForm component
function RegistrationForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMessage(null);
        setMessageType(null);
        const form = formRef.current;
        if (!form) return;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Basic required field validation
        if (!data.firstName || !data.phoneNumber || !data.email || !data.preferredDate || !data.terms) {
            setMessage('Please fill all required fields and accept the terms.');
            setMessageType('error');
            return;
        }
        setLoading(true);
        try {
            // Create Razorpay order
            const orderRes = await fetch('/api/razorpay-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 19900, // ₹199 for demo
                    notes: data,
                }),
            });
            const order = await orderRes.json();
            if (!order.id) {
                setMessage('Failed to create payment order.');
                setMessageType('error');
                setLoading(false);
                return;
            }
            // Load Razorpay script if not present
            if (!window.Razorpay) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                    script.onload = resolve;
                    document.body.appendChild(script);
                });
            }
            // Open Razorpay checkout
            const rzp = new window.Razorpay({
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: 'Digital Transformation Webinar',
                description: 'Webinar Registration',
                order_id: order.id,
                handler: function (response: any) {
                    setMessage('Registration successful! Check your email for confirmation.');
                    setMessageType('success');
                    form.reset();
                    setLoading(false);
                },
                prefill: {
                    name: data.firstName || '',
                    email: data.email || '',
                    contact: data.phoneNumber || '',
                },
                notes: data,
                theme: { color: '#facc15' },
                modal: {
                    ondismiss: () => {
                        setMessage('Payment was not completed. Please try again.');
                        setMessageType('error');
                        setLoading(false);
                    },
                },
            });
            rzp.open();
        } catch (err) {
            setMessage('Something went wrong. Please try again.');
            setMessageType('error');
            setLoading(false);
        }
    }

    return (
        <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">Full Name*</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-yellow-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 mb-1">Phone Number*</label>
                    <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="w-full px-4 py-2 border border-yellow-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Email Address*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-yellow-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-900 mb-1">Preferred Date*</label>
                <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className="w-full px-4 py-2 border border-yellow-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="questions" className="block text-sm font-medium text-gray-900 mb-1">Questions for Speakers (Optional)</label>
                <textarea
                    id="questions"
                    name="questions"
                    rows={3}
                    className="w-full px-4 py-2 border border-yellow-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                ></textarea>
            </div>
            <div className="flex items-start">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-600 border-yellow-200 rounded focus:ring-yellow-500 mt-1"
                    required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="#" className="text-yellow-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a>
                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-yellow-300 transition duration-300 shadow flex items-center justify-center"
                disabled={loading}
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                        Processing...
                    </span>
                ) : (
                    'Register Now'
                )}
            </button>
            {message && (
                <div className={`mt-2 text-center text-sm font-medium ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
            )}
        </form>
    );
}

export default WebinarPage;
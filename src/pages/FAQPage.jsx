import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What materials do you use in your clothing?",
        answer: "We use premium, ethically-sourced fabrics such as organic cotton, linen, and recycled polyester. Each material is carefully selected to ensure comfort, durability, and sustainability.",
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes! We ship worldwide. Delivery times vary depending on your location, but we work with reliable partners to ensure fast and safe shipping.",
    },
    {
        question: "How can I find my perfect size?",
        answer: "Each product page includes a detailed size guide to help you choose your ideal fit. If you’re between sizes, we recommend sizing up for a more comfortable fit.",
    },
    {
        question: "Can I return or exchange an item?",
        answer: "Absolutely. We offer a 14-day return and exchange policy. Items must be unused, with all tags and packaging intact.",
    },
    {
        question: "Are your collections limited edition?",
        answer: "Yes — most of our collections are produced in small batches to ensure exclusivity and reduce waste. Once sold out, they may not return.",
    },
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#f9f9f7] text-[#374151] px-6 py-28">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-[Playfair] font-bold text-[#C58940] mb-4"
                >
                    Frequently Asked Questions
                </motion.h1>
                <p className="text-lg text-[#374151]/80 max-w-2xl mx-auto">
                    Find quick answers about our products, shipping, and policies. Still need help?
                    Reach out to our friendly support team anytime.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#C58940]/30 bg-white rounded-xl shadow-sm overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        {/* Question */}
                        <button
                            className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-[#C58940]/5 transition"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-[Playfair]">{faq.question}</span>
                            <motion.span
                                initial={false}
                                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-[#C58940] text-2xl font-light"
                            >
                                +
                            </motion.span>
                        </button>

                        {/* Answer */}
                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-5 pb-5 text-[#374151]/80 text-base leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#374151]/70 mb-6"
                >
                    Didn’t find your answer?
                </motion.p>
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-[#C58940] hover:bg-[#b17836] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                    Contact Support
                </motion.a>
            </div>
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#f9f9f7] text-[#374151]">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-5">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-[#C58940] mb-4"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-lg text-[#374151]/80"
                >
                    Born from passion and crafted with care — we design timeless clothing that
                    celebrates individuality, confidence, and sustainable elegance.
                </motion.p>
            </section>

            {/* Brand Vision Section */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-16">
                <motion.img
                    src="https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                    alt="Fashion design"
                    className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-[Playfair] font-bold text-[#C58940] mb-4">
                        Our Vision
                    </h2>
                    <p className="text-lg leading-relaxed">
                        We believe fashion is more than just fabric — it’s a language of expression.
                        Our vision is to redefine contemporary fashion through ethical practices,
                        premium quality, and designs that inspire confidence in every wearer.
                    </p>
                </motion.div>
            </section>

            {/* Team Philosophy Section */}
            <section className="bg-[#374151] text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-[Playfair] font-bold mb-4 text-[#C58940]"
                    >
                        Our Philosophy
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed"
                    >
                        Every piece we create reflects the dedication of our designers, the touch of
                        craftsmanship, and the responsibility we hold toward our planet. From
                        minimal aesthetics to bold statements — our mission is to empower your
                        everyday elegance.
                    </motion.p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-24 px-6">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-[Playfair] text-[#C58940] font-bold mb-6"
                >
                    Step Into Your Style
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[#374151]/80 mb-8 max-w-xl mx-auto"
                >
                    Discover collections that redefine your wardrobe — crafted for those who value
                    comfort, confidence, and class.
                </motion.p>
                <Link
                    href="/collections/all"
                    className="inline-block bg-[#C58940] hover:bg-[#b17836] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                    Explore Collection
                </Link>
            </section>
        </div>
    );
}

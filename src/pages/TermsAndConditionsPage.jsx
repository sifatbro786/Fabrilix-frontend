// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TermsAndConditionsPage() {
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
                    Terms & Conditions
                </motion.h1>
                <p className="text-lg text-[#374151]/80 max-w-2xl mx-auto">
                    Please read these terms carefully before using our website or making any
                    purchase.
                </p>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto space-y-10 text-[#374151]/90 leading-relaxed">
                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        1. General Information
                    </h2>
                    <p>
                        Welcome to our fashion store. By accessing our website and using our
                        services, you agree to comply with and be bound by the following terms and
                        conditions. These apply to all visitors, users, and customers of our site.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        2. Product Information
                    </h2>
                    <p>
                        We make every effort to display the colors, sizes, and materials of our
                        products as accurately as possible. However, slight variations may occur
                        depending on screen settings and lighting. All product descriptions and
                        prices are subject to change without notice.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        3. Orders & Payments
                    </h2>
                    <p>
                        By placing an order, you confirm that all information provided is accurate
                        and complete. We reserve the right to refuse or cancel any order for reasons
                        including product unavailability, pricing errors, or suspected fraud.
                        Payments are processed securely via trusted third-party payment gateways.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        4. Shipping & Delivery
                    </h2>
                    <p>
                        We offer domestic and international shipping. Delivery times may vary
                        depending on destination and courier service. Please note that any customs
                        duties or import taxes are the customer’s responsibility.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        5. Returns & Exchanges
                    </h2>
                    <p>
                        You may return or exchange items within 14 days of delivery, provided the
                        items are unworn, unwashed, and have all tags attached. Return shipping
                        costs are the responsibility of the customer unless the item is defective or
                        incorrect.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        6. Intellectual Property
                    </h2>
                    <p>
                        All content on this website, including logos, images, and text, is owned or
                        licensed by us and is protected by intellectual property laws. You may not
                        reproduce, distribute, or modify any material without our written
                        permission.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        7. Limitation of Liability
                    </h2>
                    <p>
                        We shall not be held liable for any indirect, incidental, or consequential
                        damages arising from the use or inability to use our website or products.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">
                        8. Changes to Terms
                    </h2>
                    <p>
                        We reserve the right to modify or update these Terms & Conditions at any
                        time. Changes will be effective immediately upon posting to the website.
                        Continued use of our site constitutes acceptance of the revised terms.
                    </p>
                </section>

                <section>
                    <h2 className="font-[Playfair] text-2xl text-[#C58940] mb-3">9. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about these Terms & Conditions, please
                        contact our customer care team via the{" "}
                        <Link
                            to="/contact"
                            className="text-[#C58940] underline hover:text-[#b17836]"
                        >
                            Contact Page
                        </Link>
                        .
                    </p>
                </section>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-20 text-[#374151]/60 text-sm">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>
        </div>
    );
}

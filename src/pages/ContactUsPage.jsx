// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const validate = () => {
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast?.error?.("Name, email and message are required");
            return false;
        }
        const re = /\S+@\S+\.\S+/;
        if (!re.test(form.email)) {
            toast?.error?.("Please provide a valid email");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;
        try {
            setLoading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
                form,
                { headers: { "Content-Type": "application/json" } },
            );
            toast?.success?.(data.message || "Message sent successfully");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            toast?.error?.(err?.response?.data?.message || "Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f9f9f7] flex items-center justify-center p-6 pt-24">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 bg-white rounded-2xl shadow-md"
                >
                    <h2 className="text-3xl font-[Playfair] text-[#C58940] mb-2">Get in touch</h2>
                    <p className="text-sm text-[#374151]/80 mb-6">
                        Have a question about an order, product, or collaboration? Send us a message
                        — we typically reply within 24-48 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-[#374151]">Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#374151]">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#374151]">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none"
                                placeholder="Write your message..."
                                required
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#C58940] hover:bg-[#b17836] text-white px-6 py-3 rounded-md font-semibold transition"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl"
                >
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="text-xl font-[Playfair] text-[#374151] mb-2">
                            Contact Details
                        </h3>
                        <p className="text-sm text-[#374151]/80 mb-4">
                            Email: <a className="text-[#C58940]">support@fabrilix.com</a>
                            <br />
                            Phone: <span className="text-[#374151]">+880 1533504728</span>
                        </p>

                        <div className="mt-4">
                            <h4 className="font-medium text-[#374151]">We're here to help</h4>
                            <p className="text-sm text-[#374151]/70 mt-2">
                                Office hours: Mon — Fri, 9:00 — 18:00 (BST). We aim to reply within
                                24–48 hours.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-medium text-[#374151]">Follow Us</h4>
                            <div className="flex gap-3 mt-3">
                                <Link to="#" className="text-[#374151] underline">
                                    Instagram
                                </Link>
                                <Link to="#" className="text-[#374151] underline">
                                    Facebook
                                </Link>
                                <Link to="#" className="text-[#374151] underline">
                                    Twitter
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

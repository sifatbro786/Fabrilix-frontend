import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Left - Illustration & big 404 */}
                <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-4">
                        <div
                            className="rounded-full p-4 shadow-md"
                            style={{ background: "rgba(197, 137, 64, 0.08)" }}
                        >
                            {/* tiny clothes hanger svg */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#C58940"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="inline-block"
                            >
                                <path d="M3 12h18"></path>
                                <path d="M7 12c0-3 1-6 5-6s5 3 5 6"></path>
                                <path d="M12 6v2"></path>
                            </svg>
                        </div>

                        <div>
                            <h2
                                className="text-sm uppercase tracking-wide"
                                style={{ color: "#374151" }}
                            >
                                Oops — page not found
                            </h2>
                            <p className="mt-1 text-xs text-gray-500">
                                We couldn't find what you were looking for
                            </p>
                        </div>
                    </div>

                    <h1
                        className="text-9xl md:text-[10rem] leading-none font-extrabold"
                        style={{ color: "#374151" }}
                    >
                        404
                    </h1>

                    <div>
                        <h3
                            className="text-2xl md:text-3xl font-semibold mb-2"
                            style={{ color: "#374151" }}
                        >
                            This product wandered off the rack.
                        </h3>
                        <p className="text-base text-gray-600 max-w-lg">
                            The product or page you are looking for may have been removed, had its
                            name changed, or is temporarily unavailable. Try searching or returning
                            to the shop.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => navigate("/")}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-semibold transition-transform transform hover:-translate-y-0.5"
                                style={{ background: "#C58940" }}
                            >
                                Go to Home
                            </button>

                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-200 font-medium text-gray-700 bg-white hover:bg-gray-50"
                                style={{ color: "#374151" }}
                            >
                                Back
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-2">
                            Or try one of these popular collections:
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                "New Arrivals",
                                "Summer 2025",
                                "Essentials",
                                "Best Sellers",
                                "Gift Ideas",
                            ].map((c) => (
                                <button
                                    key={c}
                                    onClick={() =>
                                        navigate(
                                            `/collections/${encodeURIComponent(c.toLowerCase())}`,
                                        )
                                    }
                                    className="px-3 py-1.5 rounded-full text-sm font-medium border"
                                    style={{ borderColor: "rgba(55,65,81,0.08)", color: "#374151" }}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - decorative product card stack */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <div
                                className="rounded-2xl p-6 shadow-lg"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(197,137,64,0.06), #ffffff)",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-28 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                                        {/* product thumbnail placeholder */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#C58940"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-12 h-12"
                                        >
                                            <path d="M20 6v6a2 2 0 0 1-2 2h-2"></path>
                                            <path d="M4 6v6a2 2 0 0 0 2 2h2"></path>
                                            <path d="M7 15v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2"></path>
                                        </svg>
                                    </div>

                                    <div>
                                        <h4
                                            className="text-lg font-semibold"
                                            style={{ color: "#374151" }}
                                        >
                                            Classic Cotton Tee
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Soft, breathable, everyday essential
                                        </p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <span
                                                className="font-bold"
                                                style={{ color: "#374151" }}
                                            >
                                                $14.99
                                            </span>
                                            <span className="text-xs line-through text-gray-400">
                                                $19.99
                                            </span>
                                            <span
                                                className="px-2 py-0.5 rounded-full text-xs"
                                                style={{ background: "#C58940", color: "white" }}
                                            >
                                                25% OFF
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-2">
                                    <div className="h-20 rounded-md bg-white/60 flex items-center justify-center border">
                                        XS
                                    </div>
                                    <div className="h-20 rounded-md bg-white/60 flex items-center justify-center border">
                                        M
                                    </div>
                                    <div className="h-20 rounded-md bg-white/60 flex items-center justify-center border">
                                        L
                                    </div>
                                </div>
                            </div>

                            {/* decorative rotated card */}
                            <div className="absolute -right-8 -bottom-8 transform rotate-6">
                                <div
                                    className="w-40 h-28 rounded-xl shadow-lg p-4"
                                    style={{ background: "#fff" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#C58940"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-6 h-6"
                                            >
                                                <path d="M12 2v6"></path>
                                                <path d="M6 8v6"></path>
                                                <path d="M18 8v6"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p
                                                className="text-sm font-semibold"
                                                style={{ color: "#374151" }}
                                            >
                                                Essentials
                                            </p>
                                            <p className="text-xs text-gray-500">New season</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-6">
                            Need help? Contact support or search for another product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

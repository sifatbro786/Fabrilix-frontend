import { useEffect, useState } from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowHeader(false);
            } else {
                // scrolling up
                setShowHeader(true);
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
            lastScrollY = window.scrollY;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowHeader(true);
            }, 150); // Show again when scrolling stops
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 transition-transform duration-500 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Topbar />
            <Navbar />
        </header>
    );
}

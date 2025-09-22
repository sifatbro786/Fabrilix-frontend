import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import { User } from "lucide-react";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen((prev) => !prev);
    };

    const toggleCartDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* //? left logo */}
                <div>
                    <Link to="/" className="text-3xl font-medium">
                        Fabrilix
                    </Link>
                </div>

                {/* //? center navigation links */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/collections/all"
                        className="text-secondary hover:text-black text-sm font-medium uppercase"
                    >
                        Men
                    </Link>
                    <Link
                        to="#"
                        className="text-secondary hover:text-black text-sm font-medium uppercase"
                    >
                        Women
                    </Link>
                    <Link
                        to="#"
                        className="text-secondary hover:text-black text-sm font-medium uppercase"
                    >
                        Top Wear
                    </Link>
                    <Link
                        to="#"
                        className="text-secondary hover:text-black text-sm font-medium uppercase"
                    >
                        Bottom Wear
                    </Link>
                </div>

                {/* //? right icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/admin" className="px-2 block bg-secondary text-white rounded text-sm">
                        Admin
                    </Link>
                    <Link to="/profile" className="hover:text-black">
                        <User className="h-6 w-6 text-secondary" />
                    </Link>
                    <button onClick={toggleCartDrawer} className="relative hover:text-black">
                        <HiOutlineShoppingBag className="h-6 w-6 text-secondary" />
                        <span className="absolute -top-1 bg-primary text-white rounded-full text-xs px-2 py-0.5">
                            3
                        </span>
                    </button>
                    {/* //? search */}
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>

                    {/* //? mobile hamburger */}
                    <button onClick={toggleNavDrawer} className="md:hidden">
                        <HiBars3BottomRight className="h-6 w-6 text-secondary" />
                    </button>
                </div>
            </nav>

            {/* //? cart */}
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* //? mobile navigation */}
            {createPortal(
                <div
                    className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999] ${
                        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={toggleNavDrawer}>
                            <IoMdClose className="h-6 w-6 text-gray-secondary" />
                        </button>
                    </div>
                    <div className="p-4 pt-2">
                        <h2 className="text-xl font-semibold mb-4">Menu</h2>
                        <nav className="space-y-4">
                            <Link
                                to="/collections/all"
                                onClick={toggleNavDrawer}
                                className="block text-secondary hover:text-black"
                            >
                                Men
                            </Link>
                            <Link
                                to="#"
                                onClick={toggleNavDrawer}
                                className="block text-secondary hover:text-black"
                            >
                                Women
                            </Link>
                            <Link
                                to="#"
                                onClick={toggleNavDrawer}
                                className="block text-secondary hover:text-black"
                            >
                                Top Wear
                            </Link>
                            <Link
                                to="#"
                                onClick={toggleNavDrawer}
                                className="block text-secondary hover:text-black"
                            >
                                Bottom Wear
                            </Link>
                        </nav>
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
}

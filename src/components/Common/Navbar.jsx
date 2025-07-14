import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* //? left logo */}
                <div>
                    <Link to="/" className="text-2xl font-medium">
                        Fabrilix
                    </Link>
                </div>

                {/* //? center navigation links */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="#"
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
                    <Link to="/profile" className="hover:text-black">
                        <HiOutlineUser className="h-6 w-6 text-secondary" />
                    </Link>
                    <button className="relative hover:text-black">
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
                    <button className="md:hidden">
                        <HiBars3BottomRight className="h-6 w-6 text-secondary" />
                    </button>
                </div>
            </nav>
        </>
    );
}

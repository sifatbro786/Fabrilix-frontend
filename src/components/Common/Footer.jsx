import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
                    <p className="text-gray-500 mb-4">
                        Bee the first to hear about our new products, exclusive events and special
                        offers.
                    </p>
                    <p className="font-medium text-sm text-gray-600 mb-6">
                        Sign up and get 10% off your first purchase.
                    </p>

                    {/* //? newsletter form */}
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-[#fb923c] transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* //? shop links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Men's Top Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Women's Top Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Men's Bottom Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Women's Bottom Wear
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* //? support links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                FAQ's
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-gray-500 transition-colors duration-300"
                            >
                                Features
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* //? follow us */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-500"
                        >
                            <TbBrandMeta className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-500"
                        >
                            <IoLogoInstagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-500"
                        >
                            <RiTwitterXLine className="h-5 w-5" />
                        </a>
                    </div>
                    <p className="text-gray-800">Call Us</p>
                    <p className="mt-1">
                        <FiPhoneCall className="inline-block mr-2" />
                        +880-1533504728
                    </p>
                </div>
            </div>

            {/* //? footer bottom */}
            <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
                <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} Fabrilix. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

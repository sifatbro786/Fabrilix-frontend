import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        setIsOpen(false);
        setSearchTerm("");
    };

    return (
        <div
            className={`flex items-center justify-center w-full transition-all duration-300 ${
                isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
            }`}
        >
            {isOpen ? (
                <form
                    onSubmit={handleSearch}
                    className="relative flex items-center justify-center w-full"
                >
                    <div className="relative w-[72%] md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-secondary"
                        />
                        {/* //? Search Icon */}
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-secondary"
                        >
                            <HiMagnifyingGlass className="h-5 md:h-6 w-5 md:w-6" />
                        </button>
                    </div>

                    {/* //? close icon */}
                    <button
                        onClick={handleSearchToggle}
                        className="absolute right-4 md:right-[100px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-secondary"
                    >
                        <HiMiniXMark className="h-6 md:h-7 w-6 md:w-7" />
                    </button>
                </form>
            ) : (
                <button onClick={handleSearchToggle} className="hover:text-black pl-1">
                    <HiMagnifyingGlass className="h-6 w-6 text-secondary" />
                </button>
            )}
        </div>
    );
};
export default SearchBar;

import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export default function Topbar() {
    return (
        <div className="bg-primary text-white">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <RiTwitterXLine className="h-5 w-5" />
                    </a>
                </div>

                <div className="text-sm text-center flex-grow">
                    <span>we deliver worldwide – Quick & trusted service!</span>
                </div>
                <div className="hidden md:block text-sm">
                    <a href="tel:+880153504728" className="hover:text-gray-300">+880(1533504728)</a>
                </div>
            </div>
        </div>
    );
}

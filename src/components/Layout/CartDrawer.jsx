import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { createPortal } from "react-dom";

export default function CartDrawer({ drawerOpen, toggleCartDrawer }) {
    return createPortal(
        <div
            className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[26rem] h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col z-[999] ${
                drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* //? close button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-secondary" />
                </button>
            </div>

            {/* //? cart content */}
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <CartContents />
            </div>

            {/* //? checkout button */}
            <div className="p-4 bg-white sticky bottom-0">
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-[#fb923c] transition duration-300">
                    Checkout
                </button>
                <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
                    shipping, taxes and discount codes calculated at checkout.
                </p>
            </div>
        </div>,
        document.body,
    );
}

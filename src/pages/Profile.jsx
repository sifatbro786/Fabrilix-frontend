import MyOrdersPage from "./MyOrdersPage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";

export default function Profile() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen flex flex-col pt-24">
            <div className="flex-grow container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                    {/* //? left section */}
                    <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 h-[210px]">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">{user?.name}</h1>
                        <p className="text-lg text-gray-600 mb-4">{user?.email}</p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 duration-300"
                        >
                            Logout
                        </button>
                    </div>

                    {/* //? right section: orders table */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <MyOrdersPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

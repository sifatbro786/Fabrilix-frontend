import { ClipboardList, LogOut, PackageOpen, SquarePlus, Store, Users } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

export default function AdminSidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        navigate("/login");
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <Link to="/admin" className="text-2xl font-medium">
                    Fabrilix
                </Link>
            </div>
            <h2 className="text-xl font-medium text-primary mb-6 text-center">Admin Dashboard</h2>

            <nav className="flex flex-col space-y-2">
                {/* //? users */}
                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <Users size={20} className="ml-2" />
                    <span className="text-lg">Users</span>
                </NavLink>

                {/* //? products */}
                <NavLink
                    to="/admin/products"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <PackageOpen size={20} className="ml-2" />
                    <span className="text-lg">Products</span>
                </NavLink>

                {/* //? add product */}
                <NavLink
                    to="/admin/addProduct"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <SquarePlus size={20} className="ml-2" />
                    <span className="text-lg">Add Product</span>
                </NavLink>

                {/* //? orders */}
                <NavLink
                    to="/admin/orders"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <ClipboardList size={20} className="ml-2" />
                    <span className="text-lg">Orders</span>
                </NavLink>

                {/* //? shop */}
                <NavLink
                    to="/collections/all"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <Store size={20} className="ml-2" />
                    <span className="text-lg">Shop</span>
                </NavLink>
            </nav>

            {/* //? logout */}
            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 duration-200"
                >
                    <LogOut size={20} />
                    <span className="text-lg">Logout</span>
                </button>
            </div>
        </div>
    );
}

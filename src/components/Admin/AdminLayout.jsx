import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row relative">
            {/* //? mobile toggle button */}
            <div className="flex items-center md:hidden p-4 bg-slate-900 text-white z-20">
                <button onClick={toggleSidebar}>
                    <FaBars size={20} />
                </button>
                <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
            </div>

            {/* //? overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 z-10 bg-slate-900 bg-opacity-30 md:hidden"
                ></div>
            )}

            {/* //? sidebar */}
            <div
                className={`bg-slate-900 w-64 min-h-screen text-white absolute md:relative transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
            >
                {/* //? sidebar content */}
                <AdminSidebar />
            </div>

            {/* //? main content */}
            <div className="flex-grow p-6 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

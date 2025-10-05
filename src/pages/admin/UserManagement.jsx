import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addUser, deleteUser, fetchUsers, updateUser } from "../../redux/slices/adminSlice";

export default function UserManagement() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { users, loading, error } = useSelector((state) => state.admin);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    useEffect(() => {
        if (user && user.role === "admin") {
            dispatch(fetchUsers());
        }
    }, [dispatch, user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //! add new user
    const handleAddUser = async (e) => {
        e.preventDefault();

        const res = await dispatch(addUser(formData));
        toast.success(res.payload.message);

        // reset form
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        });
    };

    //! role change
    const handleRoleChange = async (userId, newRole) => {
        const res = await dispatch(updateUser({ id: userId, role: newRole }));
        toast.success(res.payload.message);
        dispatch(fetchUsers());
    };

    //! open modal
    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId);
        setIsModalOpen(true);
    };

    //! confirm delete
    const confirmDelete = async () => {
        if (selectedUserId) {
            const res = await dispatch(deleteUser(selectedUserId));
            toast.success(res.payload.message);
            dispatch(fetchUsers());
        }
        setIsModalOpen(false);
        setSelectedUserId(null);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {/* //? add new user form */}
            <div className="p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-4">Add New User</h3>
                <form onSubmit={handleAddUser}>
                    {/* name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 w-fit">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 w-fit">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 w-fit">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* role */}
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-700 w-fit">
                            Role
                        </label>
                        <select
                            name="role"
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Add User
                    </button>
                </form>
            </div>

            {/* //? users table */}
            <div className="overflow-x-auto shadow-md sm:rounded-md">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-slate-100 text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-slate-50">
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {user.name}
                                    </td>
                                    <td className="p-4">{user.email}</td>
                                    <td className="p-4">
                                        <select
                                            value={user.role}
                                            onChange={(e) =>
                                                handleRoleChange(user._id, e.target.value)
                                            }
                                            className="p-2 border rounded"
                                        >
                                            <option value="customer">Customer</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleDeleteClick(user._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-4 text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* //? delete confirmation modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-start pt-28 justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full px-6 py-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Delete User</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Are you sure you want to delete this user?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

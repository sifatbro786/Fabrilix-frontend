import { useEffect, useState } from "react";
import { SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchAdminProducts } from "../../redux/slices/adminProductSlice";
import { toast } from "sonner";

export default function ProductManagement() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.adminProducts);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        dispatch(fetchAdminProducts());
    }, [dispatch]);

    //! delete button click → modal open
    const handleDelete = (id) => {
        setSelectedProductId(id);
        setIsModalOpen(true);
    };

    //! confirm delete
    const confirmDelete = async () => {
        if (selectedProductId) {
            await dispatch(deleteProduct(selectedProductId));
            toast.success("Product deleted successfully!");
            dispatch(fetchAdminProducts());
        }
        setIsModalOpen(false);
        setSelectedProductId(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold mb-6">Product Management</h2>
                <Link
                    to="/admin/addProduct"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 text-lg font-bold"
                >
                    <SquarePlus /> Add Product
                </Link>
            </div>

            <div className="overflow-x-auto shadow-md sm:shadow-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-slate-100 text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">SKU</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-b hover:bg-slate-50 cursor-pointer"
                                >
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product.name}
                                    </td>
                                    <td className="p-4">${product.price}</td>
                                    <td className="p-4">{product.sku}</td>
                                    <td className="p-4 flex items-center">
                                        <Link
                                            to={`/admin/product/${product._id}/edit`}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 duration-100"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 duration-100"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-4 text-center text-gray-500">
                                    No Products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* //? delete confirmation modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-start justify-center pt-28 bg-black/50 z-50">
                    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Delete Product</h2>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this product?
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

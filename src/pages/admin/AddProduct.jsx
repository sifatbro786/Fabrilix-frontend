import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/slices/adminProductSlice";

export default function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.products);

    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        discountPrice: 0,
        countInStock: 0,
        gender: "",
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        images: [],
    });

    const [uploading, setUploading] = useState(false);

    //! handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //! handle image upload
    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const formData = new FormData();
        files.forEach((file) => formData.append("images", file));

        try {
            setUploading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                },
            );

            setProductData((prev) => ({
                ...prev,
                images: [...prev.images, ...data.images],
            }));
        } catch (error) {
            console.error(error);
            toast.error("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    //! delete image
    const handleRemoveImage = async (public_id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
                data: { public_id },
            });

            setProductData((prev) => ({
                ...prev,
                images: prev.images.filter((img) => img.public_id !== public_id),
            }));
        } catch (error) {
            console.error(error);
            toast.error("Error deleting image");
        }
    };

    //! submit new product
    const handleCreateProduct = async (e) => {
        e.preventDefault();

        try {
            await dispatch(createProduct(productData)).unwrap();
            toast.success("Product created successfully!");
            navigate("/admin/products");
        } catch (err) {
            toast.error(err?.message || "Failed to create product");
        }
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1 className="text-red-500">{error}</h1>;

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h3 className="text-3xl font-bold mb-6">Add New Product</h3>

            <form onSubmit={handleCreateProduct}>
                {/* //? product name */}
                <div className="mb-6">
                    <label htmlFor="name" className="block font-semibold mb-2 w-fit">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? description */}
                <div className="mb-6">
                    <label htmlFor="description" className="block font-semibold mb-2 w-fit">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        rows={4}
                        required
                    ></textarea>
                </div>

                {/* //? price */}
                <div className="mb-6">
                    <label htmlFor="price" className="block font-semibold mb-2 w-fit">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? discount price */}
                <div className="mb-6">
                    <label htmlFor="discountPrice" className="block font-semibold mb-2 w-fit">
                        Discount Price
                    </label>
                    <input
                        type="number"
                        id="discountPrice"
                        name="discountPrice"
                        value={productData.discountPrice}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? count in stock */}
                <div className="mb-6">
                    <label htmlFor="countInStock" className="block font-semibold mb-2 w-fit">
                        Count in Stock
                    </label>
                    <input
                        type="number"
                        id="countInStock"
                        name="countInStock"
                        value={productData.countInStock}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? gender */}
                <div className="mb-6">
                    <label htmlFor="gender" className="block font-semibold mb-2 w-fit">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={productData.gender}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>

                {/* //? sku */}
                <div className="mb-6">
                    <label htmlFor="sku" className="block font-semibold mb-2 w-fit">
                        SKU
                    </label>
                    <input
                        type="text"
                        id="sku"
                        name="sku"
                        value={productData.sku}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? category */}
                <div className="mb-6">
                    <label htmlFor="category" className="block font-semibold mb-2 w-fit">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? brand */}
                <div className="mb-6">
                    <label htmlFor="brand" className="block font-semibold mb-2 w-fit">
                        Brand
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={productData.brand}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? sizes */}
                <div className="mb-6">
                    <label htmlFor="sizes" className="block font-semibold mb-2 w-fit">
                        Sizes (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="sizes"
                        name="sizes"
                        value={productData.sizes.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                sizes: e.target.value.split(",").map((s) => s.trim()),
                            })
                        }
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? colors */}
                <div className="mb-6">
                    <label htmlFor="colors" className="block font-semibold mb-2 w-fit">
                        Colors (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="colors"
                        name="colors"
                        value={productData.colors.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(",").map((c) => c.trim()),
                            })
                        }
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? collections */}
                <div className="mb-6">
                    <label htmlFor="collections" className="block font-semibold mb-2 w-fit">
                        Collections
                    </label>
                    <input
                        type="text"
                        id="collections"
                        name="collections"
                        value={productData.collections}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? material */}
                <div className="mb-6">
                    <label htmlFor="material" className="block font-semibold mb-2 w-fit">
                        Material
                    </label>
                    <input
                        type="text"
                        id="material"
                        name="material"
                        value={productData.material}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* //? images */}
                <div className="mb-6">
                    <label htmlFor="image" className="block font-semibold mb-2 w-fit">
                        Upload Images
                    </label>
                    <input type="file" id="image" onChange={handleImageUpload} multiple />
                    {uploading && <p>Uploading image...</p>}

                    <div className="flex gap-4 mt-4 flex-wrap">
                        {productData.images.map((image) => (
                            <div key={image.public_id} className="relative">
                                <img
                                    src={image.url}
                                    alt={image.altText || "product"}
                                    className="w-20 h-20 object-cover rounded-md shadow-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(image.public_id)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:scale-125 z-50 duration-200"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors w-full"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

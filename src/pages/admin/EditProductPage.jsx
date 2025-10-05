import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/productsSlice";
import axios from "axios";
import { updateProduct } from "../../redux/slices/productsSlice";

export default function EditProductPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);

    const [productData, setProductData] = useState({
        name: "", //
        description: "", //
        price: 0, //
        countInStock: 0, //
        sku: "", //
        sizes: [], //
        colors: [], //
        images: [], //
        category: "",
        brand: "",
        collections: "",
        material: "",
        gender: "",
    });
    const [uploading, setUploading] = useState(false); // image uploading state

    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            setProductData(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    //! image upload:
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            const data = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            setProductData((prevData) => ({
                ...prevData,
                images: [...prevData.images, { url: data.imageUrl, altText: file.name }],
            }));
            setUploading(false);
        } catch (error) {
            console.log(error);
            setUploading(false);
        }
    };

    const handleEditProduct = async (e) => {
        e.preventDefault();
        
        await dispatch(updateProduct({ id, productData }));
        navigate("/admin/products");
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1 className="text-red-500">{error}</h1>;

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h3 className="text-3xl font-bold mb-6">Edit Product</h3>
            <form onSubmit={handleEditProduct}>
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
                                sizes: e.target.value.split(", ").map((size) => size.trim()),
                            })
                        }
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
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
                                colors: e.target.value.split(", ").map((color) => color.trim()),
                            })
                        }
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                {/* //? image */}
                <div className="mb-6">
                    <label htmlFor="image" className="block font-semibold mb-2 w-fit">
                        Upload Image
                    </label>
                    <input type="file" id="image" onChange={handleImageUpload} />
                    {uploading && <p>uploading image...</p>}

                    <div className="flex gap-4 mt-4">
                        {productData.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.url}
                                    alt={`Image ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-md shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors w-full"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
}

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails, fetchSimilarProducts } from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductDetails({ productId }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error, similarProducts } = useSelector(
        (state) => state.products,
    );
    const { user, guestId } = useSelector((state) => state.auth);

    const [mainImage, setMainImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const productFetchId = productId || id;

    useEffect(() => {
        if (productFetchId) {
            dispatch(fetchProductDetails(productFetchId));
            dispatch(fetchSimilarProducts({ id: productFetchId }));
        }
    }, [productFetchId, dispatch]);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prevQuantity) => prevQuantity + 1);
        if (action === "minus" && quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    };

    //! add to cart:
    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart");
            return;
        }

        setButtonDisabled(true);

        dispatch(
            addToCart({
                productId: productFetchId,
                quantity,
                size: selectedSize,
                color: selectedColor,
                guestId,
                user: user?._id,
            }),
        )
            .then(() => {
                toast.success("Product added to cart");
            })
            .finally(() => {
                setButtonDisabled(false);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="p-6 pt-4 md:pt-24">
            {selectedProduct && (
                <div className="max-w-6xl mx-auto bg-white p-8 pt-0 md:pt-8 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        {/* //? left thumbnails */}
                        <div className="hidden md:flex flex-col space-y-4 mr-6">
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index + 1}`}
                                    className={`w-20 h-20 md:w-[100px] md:h-[100px] object-cover rounded-lg cursor-pointer border ${
                                        mainImage === image.url ? "border-black" : "border-gray-300"
                                    }`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>
                        {/* //? main product image */}
                        <div className="md:w-1/2">
                            <div className="mb-4">
                                <img
                                    src={mainImage}
                                    alt={selectedProduct.name}
                                    className="w-full h-[220px] md:h-[580px] rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        {/* //? mobile thumbnail */}
                        <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index + 1}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                                        mainImage === image.url ? "border-black" : "border-gray-300"
                                    }`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>

                        {/* //? right details */}
                        <div className="md:w-1/2 md:ml-10">
                            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                                {selectedProduct.name}
                            </h1>
                            <div className="mb-4 flex gap-2">
                                <p className="text-lg text-gray-600 line-through">
                                    {selectedProduct.originalPrice &&
                                        `${"$" + selectedProduct.originalPrice}`}
                                </p>
                                <p className="text-xl text-red-400">
                                    {"$" + selectedProduct.price}
                                </p>
                            </div>
                            <p className="text-gray-600">{selectedProduct.description}</p>

                            <div className="mb-4 mt-2">
                                <p className="text-gray-700">Color:</p>
                                <div className="flex gap-2 mt-2">
                                    {selectedProduct.colors.map((color) => (
                                        <button
                                            key={color}
                                            className={`w-8 h-8 rounded-full border ${
                                                selectedColor === color
                                                    ? "ring-2 ring-black"
                                                    : "border-gray-300"
                                            }`}
                                            onClick={() => setSelectedColor(color)}
                                            style={{
                                                backgroundColor: color.toLocaleLowerCase(),
                                                filter: "brightness(0.5)",
                                            }}
                                        ></button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-700">Size:</p>
                                <div className="flex gap-2 mt-2">
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded border ${
                                                selectedSize === size ? "bg-black text-white" : ""
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-700">Quantity:</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <button
                                        onClick={() => handleQuantityChange("minus")}
                                        disabled={quantity === 1}
                                        className="px-2 py-1 bg-gray-200 font-bold rounded text-xl disabled:opacity-50 disabled:cursor-not-allowed "
                                    >
                                        -
                                    </button>
                                    <span className="text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange("plus")}
                                        className="px-2 py-1 bg-gray-200 font-bold rounded text-xl"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={buttonDisabled}
                                className={`bg-primary text-white uppercase py-2 px-6 rounded w-full mb-4 ${
                                    buttonDisabled
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#fb923c] duration-300"
                                }`}
                            >
                                {buttonDisabled ? "Adding..." : "Add to Cart"}
                            </button>

                            <div className="mt-10 text-gray-700">
                                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                                <table className="w-full text-left text-sm text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="py-1">Brand</td>
                                            <td className="py-1">{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Material</td>
                                            <td className="py-1">{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* //! similar products */}
                    <div className="mt-20">
                        <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
                        <ProductGrid products={similarProducts} loading={loading} error={error} />
                    </div>
                </div>
            )}
        </div>
    );
}

import { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import axios from "axios";

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const [bestSellerProduct, setBestSellerProduct] = useState(null);

    useEffect(() => {
        //! fetch products for a specific collection
        dispatch(fetchProductsByFilters({ gender: "Women", collections: "Bottom Wear", limit: 8 }));

        //! fetch best seller products
        const fetchBestSeller = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`,
                );
                setBestSellerProduct(response.data);
            } catch (error) {
                console.log("Error fetching best seller products:", error);
            }
        };

        fetchBestSeller();
    }, [dispatch]);

    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />

            {/* //? Best Seller */}
            <h2 className="text-3xl text-center font-bold md:mb-4 md:mt-10 ">Best Seller</h2>
            {bestSellerProduct ? (
                <ProductDetails productId={bestSellerProduct[2]._id} />
            ) : (
                <p className="text-center text-black">Loading best seller products...</p>
            )}

            {/* //? Bottom Wears for Women */}
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">Bottom Wears for Women</h2>
                <ProductGrid products={products} loading={loading} error={error} />
            </div>

            <FeaturedCollection />
            <FeaturesSection />
        </div>
    );
}

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const newArrivals = [
    {
        _id: 1,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }],
    },
    {
        _id: 2,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket" }],
    },
    {
        _id: 3,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket" }],
    },
    {
        _id: 4,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Stylish Jacket" }],
    },
    {
        _id: 5,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Stylish Jacket" }],
    },
    {
        _id: 6,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Stylish Jacket" }],
    },
    {
        _id: 7,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Stylish Jacket" }],
    },
    {
        _id: 8,
        name: "Stylish Jacket",
        price: 120,
        images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Stylish Jacket" }],
    },
];

export default function NewArrivalsSwiper() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // state diye disable handle
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto text-center mb-4">
                <h2 className="text-3xl font-bold mb-2">Latest Trends Arrived</h2>
                <p className="text-lg mb-4 text-gray-600">
                    Revamp your wardrobe with chic new arrivals, each crafted to bring a modern
                    twist to timeless fashion.
                </p>

                {/* Custom navigation buttons */}
                <div className="flex justify-center md:justify-end gap-4 mb-4">
                    <button
                        ref={prevRef}
                        disabled={isBeginning}
                        className={`p-2 border rounded duration-300 ${
                            isBeginning
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-white text-black hover:bg-gray-200"
                        }`}
                    >
                        <FiChevronLeft className="text-xl md:text-2xl" />
                    </button>
                    <button
                        ref={nextRef}
                        disabled={isEnd}
                        className={`p-2 border rounded duration-300 ${
                            isEnd
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-white text-black hover:bg-gray-200"
                        }`}
                    >
                        <FiChevronRight className="text-xl md:text-2xl" />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                className="container mx-auto"
                spaceBetween={24}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {newArrivals.map((product) => (
                    <SwiperSlide key={product._id}>
                        <div className="relative">
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                                draggable="false"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white p-4 rounded-b-lg">
                                <Link to={`/products/${product._id}`} className="block">
                                    <h4 className="font-medium">{product.name}</h4>
                                    <p className="mt-1">${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

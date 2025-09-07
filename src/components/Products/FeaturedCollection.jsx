import { Link } from "react-router-dom";
import featuredImage from "../../assets/featured.jpg";

export default function FeaturedCollection() {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
                {/* //? left content */}
                <div className="lg:w-1/2 p-8 text-center lg:text-left">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Comfort and Style</h2>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Style That Moves With You
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Experience premium clothing crafted for comfort and durability, blending
                        modern fashion with everyday practicality. Perfectly designed to fit your
                        lifestyle and elevate your look.
                    </p>
                    <Link
                        to="/collections/all"
                        className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-[#fb923c] duration-300"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* //? right image */}
                <div className="lg:w-1/2">
                    <img
                        src={featuredImage}
                        alt="Featured Collection"
                        className="w-full h-[360px] md:h-[700px] object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
                    />
                </div>
            </div>
        </section>
    );
}

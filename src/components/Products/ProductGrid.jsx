import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <Link key={product._id} to={`/product/${product._id}`} className="block">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="w-full h-96 mb-4">
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-sm">{product.name}</h3>
                        <p className="text-gray-500 font-medium  tracking-tighter">
                            $ {product.price}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

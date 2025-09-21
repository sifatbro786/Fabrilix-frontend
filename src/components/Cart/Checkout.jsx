import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
    products: [
        {
            _id: 1,
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 120,
            image: "https://picsum.photos/150?random=1",
        },
        {
            _id: 2,
            name: "Casual Sneakers",
            size: "42",
            color: "White",
            price: 75,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    totalPrice: 195,
};

export default function Checkout() {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(12345);
    };

    const handlePaymentSuccess = (details) => {
        console.log("Payment successful:", details);
        navigate("/order-confirmation");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 md:pt-24">
            {/* //? left section */}
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">Contact Details</h3>
                    {/* //? email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value="user@example.com"
                            className="w-full p-2 border rounded cursor-not-allowed"
                            disabled
                        />
                    </div>

                    <h3 className="text-lg mb-4 pt-2">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        {/* //? first name */}
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        firstName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        {/* //? last name */}
                        <div>
                            <label htmlFor="lastName" className="block text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        lastName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* //? address */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    address: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4">
                        {/* //? city */}
                        <div>
                            <label htmlFor="city" className="block text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        city: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        {/* //? postal code */}
                        <div>
                            <label htmlFor="postalCode" className="block text-gray-700">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        postalCode: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    {/* //? Country */}
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700">
                            Country
                        </label>
                        <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    country: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* //? Phone */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    phone: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type="submit"
                                className="bg-primary text-white uppercase py-2 px-6 rounded w-full mb-4 hover:bg-[#fb923c] duration-300"
                            >
                                Continue to Payment
                            </button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                                {/* //? paypal */}
                                <PayPalButton
                                    amount={100}
                                    onSuccess={handlePaymentSuccess}
                                    onError={(err) => alert(`Payment failed: ${err}`)}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* //? right section */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg mb-4 uppercase">Order Summary</h3>
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product) => (
                        <div
                            key={product?._id}
                            className="flex items-start justify-between py-2 border-b"
                        >
                            <div className="flex items-start">
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="w-20 h-24 object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-lg">{product?.name}</h3>
                                    <p className="text-gray-500">Size: {product?.size}</p>
                                    <p className="text-gray-500">Color: {product?.color}</p>
                                </div>
                            </div>
                            <p className="text-xl">${product?.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

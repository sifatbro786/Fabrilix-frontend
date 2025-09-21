const checkout = {
    _id: "123",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Jacket",
            color: "Black",
            size: "M",
            price: 100,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: "2",
            name: "T-Shirt",
            color: "Black",
            size: "M",
            price: 120,
            quantity: 2,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    shippingAddress: {
        address: "120 Main Street",
        city: "New York",
        country: "USA",
    },
};

export default function OrderConfirmationPage() {
    const calculateEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 10);

        return orderDate.toLocaleDateString();
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6">
            <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
                Thank You for Your Order
            </h1>

            {checkout && (
                <div className="p-6 rounded-lg border">
                    <div className="flex justify-between mb-20">
                        {/* //? order id & date */}
                        <div>
                            <h2 className="text-xl font-semibold">Order ID: {checkout._id}</h2>
                            <p className="text-gray-500">
                                Order Date: {new Date(checkout.createdAt).toDateString()}
                            </p>
                        </div>

                        {/* //? estimated delivery */}
                        <div>
                            <p className="text-emerald-700">
                                Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
                            </p>
                        </div>
                    </div>

                    {/* //? order items */}
                    <div className="mb-20">
                        {checkout.checkoutItems.map((item) => (
                            <div key={item.productId} className="flex items-center mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                        {item.color} | {item.size}
                                    </p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p>{item.price}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* //? payment & delivery info */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* //? payment */}
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Payment</h4>
                            <p className="text-gray-600">PayPal</p>
                        </div>
                        {/* //? delivery */}
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                            <p className="text-gray-600">
                                {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

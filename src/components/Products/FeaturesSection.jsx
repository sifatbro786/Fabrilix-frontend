import { BaggageClaim, CreditCard, Repeat } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="py-16 px-4 lg:px-0 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* //? Feature 1 */}
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <BaggageClaim className="text-xl text-primary" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase">Free International Shipping</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">On all orders over $50</p>
                </div>

                {/* //? Feature 2 */}
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <Repeat className="text-xl text-primary" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase">30 days return policy</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">Money back guarantee</p>
                </div>

                {/* //? Feature 3 */}
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <CreditCard className="text-xl text-primary" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase">secure checkout</h4>
                    <p className="text-gray-600 text-sm tracking-tighter">
                        100% secure checkout process
                    </p>
                </div>
            </div>
        </section>
    );
}

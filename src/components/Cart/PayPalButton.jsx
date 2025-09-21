import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalButton({ amount, onSuccess, onError }) {
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AepEtBjw5KoQJoVcYYGkebXR9pvf9rQXt8XdFlZd9WoYgvfnD7ZPOsTcnHSf5YoWxnldRkBO2fQ2sXoa",
            }}
        >
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: amount } }],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess);
                }}
                onError={onError}
            />
        </PayPalScriptProvider>
    );
}

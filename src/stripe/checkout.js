import { loadStripe } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ 
                    price: 'price_1Lu1ZPBKe58ASvND5Pm9lReE', 
                    quantity: 1 
                }],
            mode: 'payment',
            successUrl: 'http://localhost:3000/success',
            cancelUrl: 'http://localhost:3000/cancel',
        });
    };

    return (
        <>
        
        <button role="link" onClick={handleClick}>
            Checkout
        </button>

        </>
    );
}
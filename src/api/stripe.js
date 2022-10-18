import Stripe from 'stripe';

// This is your test secret API key.
const stripe = new Stripe (process.env.REACT_PUBLIC_STRIPE_SECRET_KEY);

const product = await stripe.products.create({name: 'Viva Wreath' });

const price = await stripe.prices.create({
    product: 'price_1Lu1ZPBKe58ASvND5Pm9lReE',  // Replace with the ID of the product you just created
    unit_amount: 1000,
    currency: 'usd',
});


// src/components/checkout/CheckoutButton.jsx
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ priceId, email }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      // Call your backend to create the checkout session
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/stripe/create-checkout-session`,
        {
          priceId,
          email, // Pass the email if needed for backend handling
        }
      );

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary">
      Subscribe Now
    </button>
  );
};

export default CheckoutButton;

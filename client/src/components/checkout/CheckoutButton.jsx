import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ priceId }) => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      // Call your backend to create the checkout session
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/stripe/create-checkout-session`, {
        priceId,
      });

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      // You can navigate to an error page or display an error message here
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary">
      Subscribe Now
    </button>
  );
};

export default CheckoutButton;

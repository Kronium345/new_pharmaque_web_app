// stripe.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "../models/User.js";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const THREE_MONTH_PRICE_ID = process.env.THREE_MONTH_PRICE_ID;
const NINE_MONTH_PRICE_ID = process.env.NINE_MONTH_PRICE_ID;

async function updateSubscriptionPlanByEmail(email, subscriptionLevel) {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { subscriptionLevel },
      { new: true }
    );
    if (!user) {
      console.error(`User with email ${email} not found.`);
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error updating subscription level:", error);
    return null;
  }
}

router.post("/create-checkout-session", async (req, res) => {
  const { priceId, email } = req.body;
  const successUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173/success'
    : `${process.env.FRONTEND_URL}/success`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: successUrl,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/webhook", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send("Webhook Error");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const priceId = session.line_items?.[0]?.price?.id; // Adjust this if line_items is not directly accessible
    let subscriptionLevel;

    // Determine the subscription level based on priceId
    if (priceId === THREE_MONTH_PRICE_ID) {
      subscriptionLevel = 2; // Represents the Three Months level
    } else if (priceId === NINE_MONTH_PRICE_ID) {
      subscriptionLevel = 3; // Represents the Nine Months level
    } else {
      subscriptionLevel = 1; // Default level if free or unknown
    }

    // Update subscription level if it has a recognized value
    if (subscriptionLevel) {
      await updateSubscriptionPlanByEmail(session.customer_details.email, subscriptionLevel);
    }
  }

  res.json({ received: true });
});

export default router;

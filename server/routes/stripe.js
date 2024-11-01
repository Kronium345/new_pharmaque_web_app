// routes/stripe.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import { User } from "../models/User.js"; // Import User model

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

const FRONTEND_URL = process.env.NODE_ENV === "production"
  ? process.env.FRONTEND_URL || "https://www.pharmaque.co.uk"
  : "http://localhost:5173";

// Route to create a checkout session
router.post("/create-checkout-session", async (req, res) => {
  const { priceId, userId } = req.body; // Assume `userId` is passed from the frontend

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/cancel`,
      metadata: { userId } // Attach userId for use in webhook
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe Webhook to confirm subscription and update user data
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata.userId;

    // Determine the subscription plan based on price ID
    const priceId = session.display_items[0].price.id;
    let subscriptionPlan = "free";
    if (priceId === process.env.THREE_MONTH_PRICE_ID) subscriptionPlan = "threeMonths";
    if (priceId === process.env.NINE_MONTH_PRICE_ID) subscriptionPlan = "nineMonths";

    try {
      await User.findByIdAndUpdate(userId, { subscriptionPlan });
      console.log("User subscription updated successfully.");
    } catch (err) {
      console.error("Error updating user subscription:", err);
    }
  }

  res.status(200).send("Webhook received");
});

export default router;

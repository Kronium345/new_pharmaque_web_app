import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import { User } from "../models/User.js";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

async function updateSubscriptionPlanByEmail(email, subscriptionPlan) {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { subscriptionPlan },
      { new: true } // Returns the updated document
    );
    if (!user) {
      console.error(`User with email ${email} not found.`);
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error updating subscription plan:", error);
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
      expand: ["line_items.data.price"] // Expand line items to access price ID in the webhook
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});


// stripe.js
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send("Webhook Error");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_email;
    const priceId = session.line_items?.data[0]?.price?.id;

    let subscriptionPlan;
    if (priceId === process.env.THREE_MONTH_PRICE_ID) {
      subscriptionPlan = "threeMonths";
    } else if (priceId === process.env.NINE_MONTH_PRICE_ID) {
      subscriptionPlan = "nineMonths";
    }

    if (subscriptionPlan) {
      try {
        await updateSubscriptionPlanByEmail(email, subscriptionPlan);
        console.log(`Subscription plan updated for ${email} to ${subscriptionPlan}`);
        return res.json({ received: true });
      } catch (error) {
        console.error("Error updating user subscription:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    } else {
      console.warn(`No matching subscription plan for priceId: ${priceId}`);
      return res.status(400).send("Invalid Price ID");
    }
  } else {
    res.json({ received: true });
  }
});


export default router;

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

async function updateSubscriptionPlanByEmail(email, subscriptionPlan) {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { subscriptionPlan },
      { new: true }
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
    : `${process.env.FRONTEND_URL}success`;

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

    try {
      const email = session.customer_email; // Use customer email to find the user
      const user = await User.findOne({ email });

      if (user) {
        // Determine subscription plan based on Stripe price ID
        const priceId = session.display_items[0].price.id;

        if (priceId === process.env.THREE_MONTH_PRICE_ID) {
          user.subscriptionPlan = "threeMonths";
        } else if (priceId === process.env.NINE_MONTH_PRICE_ID) {
          user.subscriptionPlan = "nineMonths";
        }

        await user.save();
        console.log(`Subscription plan updated for ${email}`);
      }
      res.json({ received: true });
    } catch (error) {
      console.error("Error updating user subscription:", error.message);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    res.json({ received: true });
  }
});



export default router;

import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "../models/User.js"; // Import User model to update the database

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const THREE_MONTH_PRICE_ID = process.env.THREE_MONTH_PRICE_ID;
const NINE_MONTH_PRICE_ID = process.env.NINE_MONTH_PRICE_ID;

// Function to update subscription plan in the database
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
    console.log(`Updated user ${email} with plan ${subscriptionPlan}.`);
    return user;
  } catch (error) {
    console.error("Error updating subscription plan:", error);
    return null;
  }
}

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️  Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      await handleCheckoutSessionCompleted(session);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Handle the checkout session completed event
async function handleCheckoutSessionCompleted(session) {
  const email = session.customer_details.email;
  const priceId = session.line_items?.[0]?.price.id;

  let subscriptionPlan;
  if (priceId === THREE_MONTH_PRICE_ID) {
    subscriptionPlan = 'threeMonths';
  } else if (priceId === NINE_MONTH_PRICE_ID) {
    subscriptionPlan = 'nineMonths';
  }

  if (subscriptionPlan) {
    await updateSubscriptionPlanByEmail(email, subscriptionPlan);
  }
}

export default router;

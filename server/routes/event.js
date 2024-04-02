import { eventSchema } from "../models/Events.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/create-event", checkAuth, async (req, res) => {
  const { name, topic, date, time, formattedDate, formattedTime } = req.body;

  const user = req.user?.userId;

  if (!user) {
    return res.json({ status: false, message: "User not found" });
  }

  const newEvent = new eventSchema({
    name,
    topic,
    date,
    time,
    user,
    formattedDate,
    formattedTime,
  });

  await newEvent.save();

  return res.json({ status: true, message: "Event created successfully" });
});

router.get("/get-events", checkAuth, async (req, res) => {
  try {
    const events = await eventSchema
      .find({
        user: req.user?.userId,
        formattedDate: { $gte: new Date() },
      })
      .sort({
        formattedDate: 1,
      });

    return res.json({ status: true, events });
  } catch (error) {
    console.error("Error getting events:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-event/:eventId", checkAuth, async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await eventSchema.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res.json({ status: true, event });
  } catch (error) {
    console.error("Error getting event:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/update-event/:eventId", checkAuth, async (req, res) => {
  try {
    const { eventId } = req.params;
    const { name, topic, date, time, formattedDate, formattedTime } = req.body;

    const event = await eventSchema.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    await eventSchema.findByIdAndUpdate(eventId, {
      name,
      topic,
      date,
      time,
      formattedDate,
      formattedTime,
    });

    return res.json({ status: true, message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete-event/:eventId", checkAuth, async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await eventSchema.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    await eventSchema.findByIdAndDelete(eventId);

    return res.json({ status: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export { router as EventRouter };

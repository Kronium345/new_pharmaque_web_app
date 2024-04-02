import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  topic: String,
  date: String,
  formattedDate: Date,
  time: String,
  formattedTime: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Event = mongoose.model("Event", eventSchema);

export { Event as eventSchema };

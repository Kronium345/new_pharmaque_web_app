import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  subscriptionType: {
    type: String,
    enum: ["Free", "Three Months", "Nine Months"],
    required: true,
    default: "Free"
  },
  subscriptionLevel: {
    type: Number,
    required: true,
    default: 1 // 1 for Free, 2 for Three Months, 3 for Nine Months
  },
  university: { type: String, default: "" },
  pharmacistType: { type: String, default: "" },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };

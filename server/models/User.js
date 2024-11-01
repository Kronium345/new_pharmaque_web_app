import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  subscriptionPlan: { type: String, default: "free", enum: ["free", "Free", "threeMonths", "ThreeMonths", "nineMonths", "NineMonths"] },
  university: { type: String, default: "" },
  pharmacistType: { type: String, default: "" },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  subscriptionPlan: {
    type: String,
    enum: ["Free", "threeMonths", "nineMonths"],
    default: "Free",
  },  
  university: { type: String, default: "" },
  pharmacistType: { type: String, default: "" },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };

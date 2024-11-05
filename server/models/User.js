import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  subscriptionLevel: {
    type: Number,
    enum: [1, 2, 3],
    default: 1, // Default to "Free"
  },
  university: { type: String, default: "" },
  pharmacistType: { type: String, default: "" },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };

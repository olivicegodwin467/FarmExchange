import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }, // Relational Reference
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bio: { type: String },
  isFarmer: { type: Boolean, default: false },
  isCustomer: { type: Boolean, default: false },
  isAgent: { type: Boolean, default: false },
  isDriver: { type: Boolean, default: false },
  isSeller: { type: Boolean, default: false },
  isBuyer: { type: Boolean, default: false },
  age: { type: String},
  gander: { type: String, default: "Male" },
  profilePicture: { type: String },
  coverPicture: { type: String },
  followers: { type: [String], default: "0" },
  following: { type: [String], default: "0" },
  posts: { type: [String], default: "0" },
  savedPosts: { type: [String], default: "0" },
  notifications: { type: [String], default: "0" },
  messages: { type: [String], default: "0" },
  groups: { type: [String], default: "0" },
  events: { type: [String], default: "0" },
  products: { type: [String], default: "0" },
  services: { type: [String], default: "0" },
  reviews: { type: [String], default: "0" },
  ratings: { type: [String], default: "0" },
  orders: { type: [String], default: "0" },
  cart: { type: [String], default: "0" },
  wishlist: { type: [String], default: "0" },
  history: { type: [String], default: "0" },
  settings: { type: [String], default: "0" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },


});

const UserData = mongoose.model("UserData", userDataSchema);
export default UserData;

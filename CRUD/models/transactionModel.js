import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  produce: String,
  quantity: String,
  price: Number,
  transactionType: { type: String, enum: ["sell", "buy"] },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", TransactionSchema);

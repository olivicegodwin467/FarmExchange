import User from "../models/agriModel.js";
import Transaction from "../models/transactionModel.js";

export const handleUssdRequest = async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";

  // Check if user is already registered
  const user = await User.findOne({ phoneNumber });

  if (text === "") {
    response = `CON Welcome to FarmExchange Rwanda 🌿
1. Register
2. Check Market Trends
3. Price Updates
4. Sell Produce
5. Contact Support`;
  } 
  
  // Register User
  else if (text === "1") {
    if (user) {
      response = `END You are already registered.`;
    } else {
      response = `CON Enter your Location:`;
    }
  } 
  
  else if (text.startsWith("1*")) {
    const location = text.split("*")[1];

    const newUser = new User({ phoneNumber, location });
    await newUser.save();

    response = `END Registration Successful! ✅`;
  } 
  
  // Check Market Prices
  else if (text === "2") {
    response = `CON Select a product:
1. Beans
2. Maize
3. Potatoes`;
  } 
  
  else if (text === "2*1") {
    response = `END Current Price for Beans: 500 RWF/kg`;
  } 
  
  // Sell Produce
  else if (text === "3") {
    response = `CON Enter your Produce & Quantity (e.g., Beans 50kg):`;
  } 
  
  else if (text.startsWith("3*")) {
    const details = text.split("*")[1];
    const [produce, quantity] = details.split(" ");

    const transaction = new Transaction({
      phoneNumber,
      produce,
      quantity,
      price: 500,  // Example price (in real cases, fetch from DB)
      transactionType: "sell",
    });

    await transaction.save();
    response = `END Sale recorded: ${quantity} of ${produce} at 500 RWF/kg`;
  } 
  
  else {
    response = "END Invalid option. Try again.";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
};

📌 FarmExchange Rwanda - USSD API
A USSD-based system built with Express.js and MongoDB to help farmers register, check market trends, update prices, and sell their produce in Rwanda.

📜 Features
✅ User Registration (via phone number)
✅ Market Price Lookup
✅ Sell Agricultural Produce
✅ Track Transactions
✅ Contact Support

📂 Project Structure
bash
Copy
Edit
/farmexchange-ussd
│-- /models
│   ├── userModel.js         # User schema
│   ├── transactionModel.js  # Transaction schema
│-- /controllers
│   ├── ussdController.js    # USSD logic handler
│-- /routes
│   ├── ussdRoutes.js        # Routes for USSD API
│-- server.js                # Express server setup
│-- config.js                # Database configuration
│-- README.md                # Project documentation
🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Deployment: ngrok (for local testing), AWS/Heroku (for production)
🚀 Getting Started
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/farmexchange-ussd.git
cd farmexchange-ussd
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file and add:

ini
Copy
Edit
MONGO_URI=mongodb+srv://your-db-connection
PORT=3000
4️⃣ Start the Server
sh
Copy
Edit
npm start
5️⃣ Expose Local Server (For Testing)
sh
Copy
Edit
npx ngrok http 3000
Copy the ngrok URL and use it in your USSD gateway settings.

🛠 API Endpoints
Method	Endpoint	Description
POST	/api/ussd	Handles USSD logic
📱 USSD Flow Example
User Dials *123#

markdown
Copy
Edit
CON Welcome to FarmExchange Rwanda 🌿
1. Register
2. Check Market Trends
3. Price Updates
4. Sell Produce
5. Contact Support
User Selects 1 (Register)

mathematica
Copy
Edit
CON Enter your Phone Number:
User Enters Phone Number

yaml
Copy
Edit
CON Enter your Location:
User Completes Registration

sql
Copy
Edit
END Registration Successful! ✅
🛠 Contributing
Want to improve this project?

Fork the repo
Create a new branch (feature-xyz)
Commit your changes (git commit -m "Added xyz feature")
Push & create a Pull Request
📄 License
This project is open-source under the MIT License.

📞 Contact: +250 789 818 053
👤 CUNGA SOFTWARE
📧 Email: cungasoftware@gmail.com
🌍 Rwanda
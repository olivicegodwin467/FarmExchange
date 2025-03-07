// Load the express module
import express from 'express';
// Load the express module
const router = express.Router();


router.post("/", (req, res) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;

    let response = "";
    if (text === "*182#") {
        response = `Welcome to USSD App. Select an option:
        1. Send money
        2. Buy airtime
        3. Pay services
        4. Bank services
        5. Loan and savings
        6. My account
        7. Pending transactions
        8. My profile
        9. Help`;
    } else if (text === "1") {
        response = `Send Money:
        1. MoMo User
        2. Send to eCash
        3. International`;
    } else if (text.startsWith("1*1")) {
        response = `Mobile numer:(Format 07xxxxxxxx)`;
    } else if (text === "6") {
        response = `My Account:
        1. Check balance
        2. Mini statement
        3. Change PIN
        4. My details
        5. Change language`;

    } else if (text === "6*1") {
        response = `Enter your PIN`;
        if (text === "1234") {
            response = `Your balance is 1000 Rwf`;
        }
    }
    else {
        response = "END Invalid input.";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);

});

export default router;  
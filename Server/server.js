const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const crypto = require('crypto');


app.use(bodyParser.urlencoded({ extended: false }));
// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());



const data = [
    {id: 1, name: 'John', age: 25, proffesion: 'Developer', email:"john@gmail.com", phone:"1234567890"},
    {id: 2, name: 'Jane', age: 22, proffesion: 'Designer', email:"jane@gmail.com", phone:"1234567890"},
    {id: 3, name: 'Jim', age: 23, proffesion: 'Manager', email:"jim@gmail.com", phone:"1234567890"},
    {id: 4, name: 'Jack', age: 24, proffesion: 'Tester', email:"jack@gmail.com", phone:"1234567890"},
    {id: 5, name: 'Jill', age: 26, proffesion: 'Developer', email:"jille@gmail.com", phone:"1234567890"},
    {id: 6, name: 'Joe', age: 27, proffesion: 'Designer', email:"joe@gmail.com", phone:"1234567890"},
    {id: 7, name: 'Jenny', age: 28, proffesion: 'Manager', email:"jenny@gmail.com", phone:"1234567890"},
    {id: 8, name: 'Jerry', age: 29, proffesion: 'Tester', email:"jerr@gmail.com", phone:"1234567890"},
    {id: 9, name: 'Jane', age: 22, proffesion: 'Designer', email:"jane@gmail.com", phone:"1234567890"},
    {id: 10, name: 'Jim', age: 23, proffesion: 'Manager', email:"jim@gmail.com", phone:"1234567890"},
    {id: 11, name: 'Jill', age: 31, proffesion: 'Designer', email:"jill@gmail.com", phone:"1234567890"},
]


app.get('/user', (req, res) => {
    res.status(200).json(data);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = data.find(user => user.id == id);
    res.status(200).json(user);
});

app.post('/user', (req, res) => {
    const newUser = req.body;
    data.push(newUser);
    res.status(200).json(data);
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = data.findIndex(user => user.id == id);
    data[userIndex] = req.body;
    res.status(200).json(data);
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = data.findIndex(user => user.id == id);
    data.splice(userIndex, 1);
    res.status(200).json(data);
});

app.post("/api/ussd", (req, res) => {
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

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import userDataRouter from './routes/userDataRouter.js';
import customerRouter from './routes/customerRouter.js';
import cors from 'cors';
import ussdRouter  from './routes/ussdRouter.js';
import agriUssdRouter from './routes/agriUssdRouter.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;


mongoose.connect(MONGOURL).then(()=>{
    console.log('Database connected');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port http:localhost:${PORT}`);
    });
    }
).catch((err)=>{
    console.log(err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/customer', customerRouter);
app.use('/api/ussd', ussdRouter);
app.use('/api/agri-ussd', agriUssdRouter);
app.use('/api/user', userRouter);
app.use('/api/user-data', userDataRouter);
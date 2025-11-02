import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))// to allow cross-origin requests from specified origin 

app.use(express.json()); // to parse JSON data in req.body (to accept JSON data from client)
app.use(express.urlencoded({ extended: true })); // to parse form data in req.body () 

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, Full Stack Project!');
})
app.get('/ram', (req, res) => {
    res.send('Hello, Ram!');
})
app.get('/shiva', (req, res) => {
    res.send('Hello, Shiva!');
})

app.listen(PORT, () => {
    console.log(`server is running on Port http://localhost:${PORT}`);
})
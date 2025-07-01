import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
dotenv.config();
const app = express();

// one of the  most important things to do is to use cors
// to allow cross-origin requests, especially if your frontend and backend are on different ports or domains
app.use(cors({
    origin: 'https://localhost:3000', // Allow all origins, you can specify a specific origin if needed "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow credentials if needed
}));


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Full Stack Project!');
})
app.get('/ram', (req, res) => {
    res.send('Hello, Ram!');
})
app.get('/shyam', (req, res) => {
    res.send('Hello, Shyam!');
})  

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
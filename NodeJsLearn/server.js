import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
    
}))

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
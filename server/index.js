import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use( cors({
    origin: ["http://localhost:8000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;

const connectionString = `mongodb+srv://${username}:${password}@cluster0.8jz8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` 

mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));


app.get('/', (req, res) => {
    res.json({name:'Hello from server'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


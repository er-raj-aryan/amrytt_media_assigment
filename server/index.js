import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRoutes from './Routes/routes.js';

const app = express();
dotenv.config({ path: './.env' });


const username = process.env.MONGODB_USERNAME ? process.env.MONGODB_USERNAME.trim() : 'username';
const password = process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD.trim() : 'password';


// middleware
app.use(express.json());
app.use( cors({
    origin: ["http://localhost:8000", "https://amrytt-media-assgiment-client.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
  app.use(express.urlencoded({extended: false})); 

 

const connectionString = `mongodb+srv://${username}:${password}@cluster0.8jz8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` 

mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));

// routes
app.use("/api/products", ProductRoutes);

app.get('/', (req, res) => {
    res.json({name:'Hello from server'});
});



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


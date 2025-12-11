
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/contacts',contactRoutes);

app.get('/',(req,res)=>res.send("HustleHub Backend v3"));

const port=process.env.PORT||5001;
app.listen(port,()=>console.log("Server running "+port));

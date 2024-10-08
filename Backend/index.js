import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan'
import connectDB from "./config/db.js";
import authroute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import cors from 'cors';
import productRoutes from "./routes/productRoutes.js"
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

//configure env
dotenv.config();

connectDB();

const app= new express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, "public", "client")));

//middleware
app.use(cors());
//app.use(express.json()); //middleware to parsing request body
app.use(express.json({ limit: '10mb' }));

app.use(morgan('dev')); //middlware for morgan


//routes
app.use('/api/v1/auth', authroute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
//rest api
app.get('/', (req,res) =>{
    //console.log(req);
    //return res.status(234).send("welcome to ecomm app");
     res.sendFile(join(__dirname, '../../' + 'public', 'client', 'index.html'));
});


//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, ()=>{
    console.log(`App is listening on PORT ${PORT}`)});

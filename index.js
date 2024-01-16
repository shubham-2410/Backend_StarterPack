const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/authRoutes');

require('dotenv').config();


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/v1/auth' , authRoute);

app.get('/' , async(req , res)=>{
    return res.status(200).json({
        success:true,
        message: "Your Server is up and running ..."
    })
})


const PORT = process.env.PORT || 4000;
const url = process.env.MONGODB_URL;
app.listen(async()=>{
    try {
        await connectDB(url);
        console.log("connection to DB successfull");
        console.log(`App is running at http://localhost:${PORT}`);
    } 
    catch (error) {
        console.log("Error while connecting to DB" , error)
    }
})
const dotenv = require('dotenv') ;
dotenv.config() ;

const express = require('express') ;
const cors = require('cors') ;
const connectDB = require('./config/db') ;

connectDB() ;

const app = express() ;
app.use(cors()) ;

app.get('/',(req,res)=>{
    res.json({message:'hello from backend'}) ;
}) ;

app.use('api/auth' , require('./routes/authRoutes')) ;

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`)) ;
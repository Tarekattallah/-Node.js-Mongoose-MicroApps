// Reqire Dotenv
require('dotenv').config();
// Require express
const express = require('express');
// Use express
const app = express();
// port 
const port = process.env.PORT||3000;
// middleware 
app.use(express.json()) ;
// Route test
app.get('/', (req, res) => {
    res.send('Server is running successfully');
});

//require Mongoose
const mongoose = require('mongoose');
// DB connection 
async function connectionDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/list")
        console.log('connected');
    }catch(error){
        console.log(error);
    }
}
connectionDB();


const taskRoutes = require('./Routes/taskRoutes');
app.use('/api/tasks', taskRoutes);


// Start Server 
app.listen(port, ()=>{
    console.log(`Server is running ${port}`);
    
})

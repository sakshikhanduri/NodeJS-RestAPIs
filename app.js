

const express = require('express')
const app = express();
 const tasks = require('./Routes/tasks');
 const connectDB = require('./db/connect')
const NotFound = require('./middlewares/NotFound')
 require('dotenv').config()
//  app.use(express.urlencoded())
 app.use(express.json())
 app.use('/api/v1/tasks',tasks)
  app.use(NotFound)
//  mongoose.connect()

const port = 3000;

const start = async ()=>{
    try {
       await connectDB(process.env.MONGO_URL)
       app.listen(port,console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();

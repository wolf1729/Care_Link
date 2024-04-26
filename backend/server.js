const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const databaseURL = process.env.DATABASE_URL

app.use(express.json())
app.use(cors())

const connectDB = async (dbURL) => {
    try {
      await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database Connected');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  };

app.listen(3000, async() => {
    try{
        await connectDB(databaseURL)
        console.log(`Server Listening on Port : 3000`)
    }
    catch(err) {
        console.log('Code Red')
    }
})
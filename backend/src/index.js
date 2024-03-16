const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');

dotenv.config()

const app = express()
const port = process.env.PORT || 3001;


const db = require('./config/db');

db.connect();

// console.log('process.env.MONGO_DB', process.env.MONGO_DB)

// mongoose.connect(`mongodb+srv://hoanglypham7702:${process.env.MONGO_DB}@cluster0.yiem8rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster00`)
//     .then(() => {
//         console.log('Connect to DB Success!!')
//     })
//     .catch((err) =>{
//         console.log(err);
//         console.log('Failed to connect to the database: ', err.stack)
//     })



app.get('/', (req, res) => {
    res.send('Hello World, hihi')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
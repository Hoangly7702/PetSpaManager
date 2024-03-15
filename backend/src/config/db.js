// import mongoose from 'mongoose';

// export const connectDB = async() =>{
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL,{

//         })
//         if (conn){
//             console.log('MongoDB Connected...');
//         }
//     } catch (error) {
//         console.log('Error connecting to the database: ', error);
//         process.exit(1);
//     }
// }

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connect Successfully!!');
    } catch (error) {
        console.log('Connect Failure!!');
    }
}

module.exports = { connect };

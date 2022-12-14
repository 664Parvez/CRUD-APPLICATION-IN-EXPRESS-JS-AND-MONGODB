require('dotenv').config()
const mongoose = require('mongoose')
const DB_CONNECT = process.env.DB_CONNECT

const conn = mongoose.connect(DB_CONNECT).then(() => {
    console.log(`Database has connected`);
}).catch((err) => {
    console.log("Database connect failed" + err);
})

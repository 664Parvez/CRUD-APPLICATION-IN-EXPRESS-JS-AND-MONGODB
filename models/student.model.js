const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    gender : {
        type : String
    },
    status : {
        type : String
    },
    date : {
        type: Date, 
        'default': Date.now
    }
})

const CreateModel = new mongoose.model('student', createSchema)

module.exports = CreateModel
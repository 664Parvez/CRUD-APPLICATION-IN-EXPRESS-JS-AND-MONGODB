const CreateModel = require('../models/student.model')
const axios = require('axios')

const home = (req, res) => {
    // Make a get request to { user }
    axios.get("http://localhost:3000/user")
    .then((response) => {
        res.render('index', { 
            title : "CRUD APPLICATION",
            data : response.data
        })
    })
}

module.exports = home


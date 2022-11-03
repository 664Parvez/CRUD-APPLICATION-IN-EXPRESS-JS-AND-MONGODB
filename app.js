const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const homeRoute = require('./routers/home.route')
const newUserRoute = require('./routers/sendData.route')


// const morgan = require('morgan')

// Log Request
// app.use(morgan("dev"))


// View Engine Setup
app.set('view engine', 'ejs')


// Static File setup
app.use(express.static('assets'))


// Parse Request to body parser
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())



// Page Router
app.use(homeRoute)
app.use(newUserRoute)



app.use((req, res) => {
    res.send('Page is not found')
})

module.exports = app



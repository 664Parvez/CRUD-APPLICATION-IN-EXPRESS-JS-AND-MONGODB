const router = require('express').Router()
const { allData, send, sendPost, updateData, dataUpdate, deleteData } = require('../controllers/sendData.controller')

// Actual Routes 
router.get('/user', allData)
router.post('/user', sendPost)


// Show Pages Routes
router.get('/new-user', send)


// Show Data & Update Data
router.get('/update-user/:id', updateData)
router.post('/update-user/:id', dataUpdate)


// Delete Data
router.get('/delete/:id', deleteData)





module.exports = router
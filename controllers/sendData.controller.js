const CreateModel = require('../models/student.model')


//  Show All Data
const allData = async (req, res) => {
    try {
        const getData = await CreateModel.find()
        res.send(getData)
        
    } catch (error) {
        res.send(error)
    }
}


// Show Data Send Form
const send = async (req, res) => {
    
    res.render('sendForm',
    {
        title : 'insert-new-user',
    })
}


// For Data Send
const sendPost = async (req, res) => {

    try{

        // Validate Request
        if (!req.body) {
            res.status(400).send({ message: "Content can't be Empty !" })
        }

        const newData = new CreateModel({
            firstName : req.body.fastName,
            lastName : req.body.lastName,
            email : req.body.email,
            gender : req.body.gender,
            status : req.body.status
        })
    
        await newData.save()
        res.status(301).render("sendForm", {
            title : 'insert-new-user',
        })

    } catch (err) {
        res.status(405).send(err.message)
    }
    
}

// Update Form Show and Find ID
const updateData = async (req, res) => {

    try {
        const result = await CreateModel.findById(req.params.id)
        
        res.render('updateForm', {
            title : "Update new data",
            data : result
        })
    } catch (error) {
        res.send(error)
    }
}


// Update Data by ID
const dataUpdate = async (req, res) => {
    try {
        
        const re  = await CreateModel.findByIdAndUpdate(req.params.id, req.body)
        
    } catch (error) {
        res.send(error)
    }

    res.redirect("/")
}



// Delete Data by ID
const deleteData = async (req, res) => {
    // console.log(req.params.id);
    
    try{
        let d = await CreateModel.findByIdAndDelete( req.params.id )

    }catch (err) {
        res.send(err)
    }

    res.redirect('/')
}




module.exports = { allData, send, sendPost, updateData, dataUpdate, deleteData }




// Update Code of normal

// const id = req.params.id
//     await CreateModel.findByIdAndUpdate(id, req.body )
//     .then((data) => {
//         if(!data) {
//             res.send("Data can not Update")
//         } else {
//             res.send("Data Update Successful")
//         }
//     })
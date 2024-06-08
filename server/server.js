require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todo')

//express app
const app = express()

//middlewares
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/todo',todoRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        console.log('Connected to db');
        app.listen(process.env.PORT, () => {                //process.env - object - available globally in node.js -- dotenv - package - loads .env variables in process.env
        console.log('Server is running on port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//routes
app.get('/',(req,res) => {
    res.json({msg:'Welcome to the app'})
})


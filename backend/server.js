require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
console.log(req.path, req.method)
next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/MERNapp')
.then(() => {
//listen for requests
app.listen(process.env.PORT, () => {
    console.log('connecting  to db & listening on port', process.env.PORT)
})
})
.catch((error) =>{
    console.log(error)
})

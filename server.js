const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {router} = require('./Routes/index')
const port = process.env.PORT || 3000

mongoose.connect(
    "mongodb+srv://root:Long2109@cluster0.bhry4.mongodb.net/test",
   {useNewUrlParser:true}
)
const db = mongoose.connection
db.on("err",console.error.bind(console,"connection error : "))
db.once("open",()=>{
    console.log("connected to MongoDB")
})

app.use(express.json())
app.use('/',router)
app.listen(port,()=>{
    console.log(port)
})



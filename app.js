const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://amjath:itsArkingtime7@cluster0.n01k0zd.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let course=new coursemodel(input)
    console.log(course)
    course.save()
    res.json({"status":"test"})
})

app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>(
            res.json(data)
        )
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Server started")
})
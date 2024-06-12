const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://amjath:itsArkingtime7@cluster0.n01k0zd.mongodb.net/militaryDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    console.log(course)
    course.save()
    res.json({ "status": "test" })
})

app.get("/view", (req, res) => {
    coursemodel.find().then(
        (data) => {
            res.json(data)
    }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post("/search", (req, res) => {
    let input = req.body
    coursemodel.find(input).then(
        (data) => { res.json(data) }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>{
        res.json({"status":"success"})
        }
    ).catch(
        (error)=>
            {
                res.json({"status":"error"})
            }
    )
})


app.listen(8081, () => {
    console.log("Server started")
})
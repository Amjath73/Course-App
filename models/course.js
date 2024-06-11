const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "courseTitle":{type:String,required:true},
        "description":String,
        "date":String,
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "trainerName":{type:String,required:true}
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}
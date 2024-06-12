const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "courseTitle":{type:String,required:true},
        "description":{type:String,required:true},
        "date":{type:String,required:true},
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "trainerName":{type:String,required:true}
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}
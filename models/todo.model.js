const mongoose = require("mongoose")

const todoSchema=mongoose.Schema({
    name:{
        type:String,
        default: "",
        required: true
    },
    description:{
        type:String,
        default:"",
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
const Todo=mongoose.model("Todo",todoSchema)
module.exports=Todo;
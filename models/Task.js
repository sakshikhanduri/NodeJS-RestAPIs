const mongoose = require('mongoose')




const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide name'],
        trim:true,
        maxlength:[20,'Nmae can not exceed 20 characters']
    },
    completed:Boolean
})


module.exports = mongoose.model('Task',TaskSchema)

const Task = require('../models/Task')

const CreateTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
       res.status(500).json({msg:"There is an error"})
    }
    
}


const getSingleTask = async (req,res) =>{
    try {
        const {id: TaskID} = req.params
        const task = await Task.findById({_id: TaskID})
        if(!task){
            return res.status(404).json({msg:`No task found with id ${TaskID}`})
        }
        res.status(200).json({task})
    }catch (error) {
        res.status(500).json({msg:"There is an error"})
    }
}

const getAllTasks = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:"There is an error"})
    }
    
}


const updateTask = async (req,res) =>{
    try{
        const {id:TaskID} = req.params
        const task = await Task.findOneAndUpdate({_id:TaskID},req.body)
        if(!task){
            return res.status(404).json({msg:`No task present with ${TaskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:`There is some error`})
    }
    
    
}

const deleteTask = async (req,res) =>{
    try{
        const {id:TaskID} = req.params
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            return res.status(404).json({msg:`No task present with ${TaskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:`There is some error`})
    }
    
    
}
module.exports = {
    CreateTask,
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask
}
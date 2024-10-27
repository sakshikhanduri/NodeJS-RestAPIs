const express = require('express')
const app = express()
const { CreateTask, getAllTasks, getSingleTask, updateTask, deleteTask } = require('../Controllers/tasks')


const router = express.Router()
//Routes


router.route('/').get(getAllTasks)
router.route('/').post(CreateTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)



module.exports = router
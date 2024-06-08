const mongoose= require('mongoose')
const Todo = require('../models/todoModel')

//create a todo
const createTodo = async(req,res) => {
    const {task} = req.body
    try {
        const todo = await Todo.create({task})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//get all todos
const getTodos = async(req,res) => {
    const todos = await Todo.find({})
    res.status(200).json(todos)
}

//get a todo
const getTodo = async(req,res) => {
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'})
    }
    const todo = await Todo.findById(id)
    if(!todo){
        res.status(404).json({error: error.message})
    }
    res.status(200).json(todo)
}

//update a todo

//delete a todo

module.exports = {
    createTodo,
    getTodos,
    getTodo
}
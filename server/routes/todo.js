const express = require('express')
const Todo = require('../models/todoModel')
const {
    createTodo,
    getTodos,
    getTodo
} = require('../controllers/todoController')

const router = express.Router()

// get all todos

router.get('/',getTodos)

//get single todo

router.get('/:id',getTodo)

// crete a todo

router.post('/',createTodo)

//delete a todo

router.delete('/:id',(req,res) => {
    res.json({msg:'delete todo'})
})

// update a todo

router.patch('/:id',(req,res) => {
    res.json({msg:'update todo'})
})

module.exports = router
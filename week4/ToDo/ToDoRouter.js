const express = require('express')
const todoRouter = express.Router()
const {v4:uuid} = require('uuid')

// Data
const todos = [
    {
        name: "1. ToDo",
        description: "first todo",
        imageUrl: "https://i.pinimg.com/originals/a2/9d/fc/a29dfccacc038e1c7a8aa36e0be345ef.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "2. ToDo",
        description: "second todo",
        imageUrl: "https://i.pinimg.com/originals/a2/9d/fc/a29dfccacc038e1c7a8aa36e0be345ef.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "3. To Do",
        description: "third todo",
        imageUrl: "https://i.pinimg.com/originals/a2/9d/fc/a29dfccacc038e1c7a8aa36e0be345ef.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "4. ToDo",
        description: "fourth todo",
        imageUrl: "https://i.pinimg.com/originals/a2/9d/fc/a29dfccacc038e1c7a8aa36e0be345ef.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "5. ToDo",
        description: "fifth todo",
        imageUrl: "https://i.pinimg.com/originals/a2/9d/fc/a29dfccacc038e1c7a8aa36e0be345ef.jpg",
        completed: false,
        _id: uuid()
    }
]

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const addTodo = req.body
        addTodo.completed = false
        addTodo._id = uuid()
        todos.push(addTodo)
        res.send(`Added "${addTodo.name}" to the todo list!`)
    });

todoRouter.route("/:todoId")
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todos.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const addTodo = req.body
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], addTodo)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`Deleted todo!`)
    });

    module.exports = todoRouter;
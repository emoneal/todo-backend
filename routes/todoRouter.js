const express = require('express')
const todoRouter = express()
const {v4: uuidv4} = require('uuid')

const todoList = [
    {
        
        name: "Do laundry",
        description: "Do laundry for tomorrow",
        imageUrl: "https://images.ctfassets.net/ajjw8wywicb3/2sGz5dCo8LlJoenyCauJ9H/50da004ddfeb3aa2fa839d854d3c9c67/HOW_TO_WASH_CLOTES_How_to_do_Laundry_570x310.jpg",
        completed: false,
        _id: uuidv4()
        
    },
    
    { 
        name: "Pay bills",
        description: "Pay water bill",
        imageUrl: "https://blog.havenlife.com/wp-content/uploads/2019/01/prism-money-app-review.jpg",
        completed: true,
        _id: uuidv4()
    }
]

// Get ALL
todoRouter.get("/", (req, res) => {
        res.send(todoList)
    })

// Get ONE
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoList.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// POST one

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoList.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the list!`)
})

// PUT one

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todoList.findIndex(todoThing => todoThing._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], updateObject)
    res.send(updatedTodo)
})

//DELETE one

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(thing => thing._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send(`"Successfully deleted ${todoId} from the server"`)
})



module.exports = todoRouter
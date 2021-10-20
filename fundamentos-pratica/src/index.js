const express = require('express')
const cors = require('cors');
const {v4: uuidV4} = require('uuid')

const app = express()

app.use(cors());
app.use(express.json())

const users = [];

function checksExistsUserAccount(request, response, next) {
    const {username} = request.headers

    const user = users.find(user => user.username === username)

    if(!user){
        return response.status(400).json({error: "Username doesn't exists"})
    }

    request.user = user

    return next()
  }
  
  app.post('/users', (request, response) => {
    const {name, username} = request.body

    users.push({
        id: uuidV4(),
        name,
        username,
        created_at: new Date(),
        todos: []
    })

    return response.status(200).json(users)
  });
  
  app.get('/todos', checksExistsUserAccount, (request, response) => {
    const {user} = request

    return response.json(user.todos)
  });
  
  app.post('/todos', checksExistsUserAccount, (request, response) => {
    const {user} = request
    const {title, deadline} = request.body

    user.todos.push({
        id: uuidV4(),
        title,
        done: false,
        deadline: new Date(deadline), 
	    created_at: new Date()
    })

    return response.status(200).json(user.todos)
  });
  
  app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
    const {user} = request
    const {title, deadline} = request.body
    const {id} = request.params

    const uuid = user.todos.some(todo => todo.id === id)

    if(!uuid){
        return response.status(400).json({error: "ID inexistent!"})
    }

    const todo = user.todos.find(todo => todo.id === id)

    todo.title = title
    todo.deadline = deadline

    return response.status(200).json(todo)
  });
  
  app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
    const {user} = request
    const {id} = request.params

    const uuid = user.todos.some(todo => todo.id === id)

    if(!uuid){
        return response.status(400).json({error: "ID inexistent!"})
    }

    const todo = user.todos.find(todo => todo.id === id)

    todo.done = true

    return response.status(200).json(todo)
  });
  
  app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
    const {user} = request
    const {id} = request.params

    const uuid = user.todos.some(todo => todo.id === id)

    if(!uuid){
        return response.status(400).json({error: "ID inexistent!"})
    }

    const todo = user.todos.find(todo => todo.id === id)

    user.todos.splice(todo, 1)

    return response.status(200).json(user.todos)
  });

app.listen(3001, () => {
    console.log('App listen port 3001')
})
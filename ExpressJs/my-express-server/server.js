const express = require('express')
const app = express()

app.get('/', (request, response)=>{
    response.send('<h1>Hello World!</h1>')
})

app.get('/contact', (req, res)=>{
    res.send('contact me at: rasshit.dsgn@gmail.com')
})

app.get('/about', (req, res)=>{
    res.send('I am freelancer')
})

app.get('/hobbies', (req, res)=>{
    res.send('My hobbies is swimming and coding')
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})


const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))//ini menggunakan urlencode karena data dari form di index.html

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res)=>{
    const num1 = Number(req.body.num1) //num1 dna num2 ini dari name di index.html
    const num2 = Number(req.body.num2) 
    const result = num1 + num2
    res.send(`The result of the calculation is ${result}`)
})

app.get('/bmiCalculator', (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmiCalculator', (req, res)=>{
    const weight = parseFloat(req.body.weight)//parseFloat adalah untuk desimal dan untuk memindahi jika ada string seperti huruf
    const height = parseFloat(req.body.weight)
    const bmi = weight / (height*height)

    res.send("Your BMI is " + bmi)
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})


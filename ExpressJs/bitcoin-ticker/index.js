const express = require('express');
const bodyParser =  require('body-parser');
const request = require('request');
const { json } = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res)=>{
    // console.log(req.body.crypto);

    const crypto = req.body.crypto;
    const fiat = req.body.fiat;
    const amount = req.body.amount;

    //ini API tanpa parameter URL
    // const baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    // let finalURL = baseURL + crypto + fiat;

    // ini menggunakan paramater di URL API 
    const options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method : "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        } 
    }

    //ini menggunakan request
    request(options, function(error, response, body){
        const data = JSON.parse(body);x
        const price = data.price;

        console.log(price);

        let currentDate = data.time;

        //res.write ini untuk mencetak lebih dari satu
        res.write("<p>The current date is " + currentDate + "</p>");
        res.write("<h1>The current price of " + amount + crypto + " is " + price + fiat + " USD</h1>")


        // res.send("<h1>The current price of " + crypto + " is " + price + fiat + " USD</h1>");

    })

})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000.');
})
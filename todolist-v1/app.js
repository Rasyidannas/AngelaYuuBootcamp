const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");//ini memanggil file date.js

const app = express();

let items = [];
let workItems=[];

app.set('view engine', 'ejs');//ini untuk memanggil EJS

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));//ini untuk memanggil file didalam public folder agar bisa dipakai

app.get("/", (req, res)=>{
    let day = date.getDate();//ini untuk mengakses di date.js

    res.render("list", {listTitle: day, newListItems: items});//kindOfDay is from list.ejs
});

//ini untuk mengatur list home dan work secara terpisah
app.post("/", function(req, res){
    const item  = req.body.newItem//ini untuk mengakses ke input name="newItem"

    //ini jika button value bernilai sama dengan work
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");//ini untuk mngarahkan ke root dan aakan memeproses penambahaan li   
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology:true})//useNewUrlParser untuk membuat koneksi baru

//create Schema
const articleSchema = {
    title: String,
    content: String
}

//create Model -> ini untuk membuat collection
const Article = mongoose.model('Article', articleSchema)


//////////////////////////////////////////// REQUEST TARGETING ALL ARTICLES /////////////////////////////////////////////////////

//ini shortcut untuk chained route handlers
app.route("/articles").get(function(req, res){
    //ini untuk menampilkan data dari database
    Article.find(function(err, foundArticles){
        if(!err){
            res.send(foundArticles)//ini untuk mencetak kembali ke browser
        }else{
            res.send(err)
        }
    })
}).post(function(req, res){
    //create/write data di database
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    newArticle.save(function(err){
        //ini untuk menampilkan di postman app
        if(!err){
            res.send('Successfully added a new article.')
        } else{
            res.send(err)
        }
    })
}).delete( function(req, res){
    Article.deleteMany(function(err){
        if(!err){
            res.send('Successfully added a new articles.')
        }else{
            res.send(err)
        }
    })
})


//ini jika tidak menggunakan shortcut
//ini get dari database 
// app.get('/articles', function(req, res){
//     //ini untuk menampilkan data dari database
//     Article.find(function(err, foundArticles){
//         if(!err){
//             res.send(foundArticles)//ini untuk mencetak kembali ke browser
//         }else{
//             res.send(err)
//         }
//     })
// })

//ini post untuk database
// app.post('/articles', function(req, res){
//     //create/write data di database
//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     })
//     newArticle.save(function(err){
//         //ini untuk menampilkan di postman app
//         if(!err){
//             res.send('Successfully added a new article.')
//         } else{
//             res.send(err)
//         }
//     })
// })

//ini untuk delete all post
// app.delete('/articles', function(req, res){
//     Article.deleteMany(function(err){
//         if(!err){
//             res.send('Successfully added a new articles.')
//         }else{
//             res.send(err)
//         }
//     })
// })


//////////////////////////////////////////// REQUEST TARGETING A SPECIFIC ARTICLES /////////////////////////////////////////////////////

app.route('/articles/:articleTitle').get(function(req, res){//ini untuk menampilkan article
    //req.params.articleTitle ini sama dengan di route yang :/articleTitle
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticles){
        if(foundArticles){
            res.send(foundArticles)
        }else{
            res.send("No articles matching taht title was found.")
        }
    })
}).put(function(req, res){//ini untuk mengupdate article
    Article.update(
        {title: req.params.articleTitle},//ini condition seperti WHERE di SQL
        {title: req.body.title, content:req.body.content},
        {overwrite: true},//ini perintah untuk meninpa dan menghapus
        function(err){
            if(!err){
                res.send("Successfully updated article.")
            }
        }
    )
}).patch(function(req, res){//ini untuk mengupdate bagian isi tertentu saja
    Article.update(
        {title: req.params.articleTitle},//ini condition seperti WHERE di SQL
        {$set: req.body},//ini akan otomatis ke body form postman
        function(err){
            if(!err){
                res.send("Successfully updated article.")
            } else{
                res.send(err)
            }
        }
    )
}).delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},//ini condition seperti WHERE di SQL
        function(err){
            if(!err){
                res.send("Successfully deleted the correspnding article.")
            }else{
                res.send(err)
            }
        }
    )
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});

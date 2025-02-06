var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.send("Hello world! by express");
});
app.listen(8080);

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest;
     res.send("Hi "+name+" I am sure you will "+quest) ;
    });

app.post('/postform', function(req, res){
    var name = req.body.name;
    var quest = req.body.quest;
    res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.get('/test', function(req, res){
    res.send("this is route 2");
   });

app.use(express.urlencoded({extended:true}))


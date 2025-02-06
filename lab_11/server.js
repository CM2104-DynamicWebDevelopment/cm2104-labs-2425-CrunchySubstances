var express = require('express');
var app = express();
var knockknock = require('knock-knock-jokes');
var randomJoke = knockknock()
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

app.get('/test', function(req, res){
    res.send("this is route 2");
   });


app.get('/joke', function(req, res){
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end(randomJoke);
   });

app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
     res.send("X + Y="+(x+y));
    });

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var operator = req.query.operator;
    if (operator == "add"){
        res.send("X + Y= "+(x+y));
    }else if (operator == "sub"){
        res.send("X - Y = "+(x-y));
    }else if (operator == "mult"){
        res.send("X * Y = "+(x*y));
    }else if (operator == "div"){
        res.send("X / Y = "+(x/y));
    }
    
    });
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
app.use(express.urlencoded({extended:true}))

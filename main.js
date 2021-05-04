var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.send("Hello from our app")
});

app.get("/joke", function(req,res){
    var joke = "What do you call a dog";
    res.send(joke);

});

app.listen(8080, function(){
    console.log('App listening on port 8080')
});
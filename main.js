var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.send("Hello from our app")
});

app.get("/joke", function(req,res){
    var joke = "What do you call a dog";
    res.send(joke);

});

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
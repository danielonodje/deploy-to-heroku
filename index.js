var express = require('express');
var http = require('http');
var app = express();

app.get('/',function(request,response){
    response.send("I am become Death. Destroyer of worlds");
});

app.listen(8800);
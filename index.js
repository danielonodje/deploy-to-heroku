var express = require('express');
var http = require('http');
var app = express();
app.set('port', (process.env.PORT || 8800));

app.get('/',function(request,response){
    response.send("I am become Death. Destroyer of worlds");
});

app.listen(app.get('port'),function(){
    console.log('Node app is running on port', app.get('port'));
});
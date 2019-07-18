var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({res: 'Hello Peera'});
});

app.get('/show', function(req, res){
    res.json({res: 'Show show'});
});

app.get('/login', function(req, res){
    res.json({res: 'Show show'});
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening att http://%s:%s", host, port);
});
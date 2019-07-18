var express = require('express');
var path = require('path');
var pug = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views', '../AdminLTE-2.4.15');
app.use(express.static(path.join(__dirname, '../AdminLTE-2.4.15')));
app.get('/home', function(req, res){
    res.render('main', {header: "Hello Peera "});
});

var server = app.listen(3001, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening att http://%s:%s", host, port);
});
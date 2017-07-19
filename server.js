/**
 * Created by sahaque on 7/19/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/message', function (req, res) {
    console.log(req.body);
    res.status(200);
});

var server = app.listen(5000, function(){
    console.log('listening to port ', server.address().port);
});

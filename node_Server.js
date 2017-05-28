var express = require('express');
var app = express();
var parser = require('body-parser');
app.use(parser.json({
   limit: '25mb'
}));
app.use(express.static(__dirname + '/public'));
app.listen('6001', '0.0.0.0', function() {
   console.log("To view your app, open this link in your browser: http://localhost:6001");
});
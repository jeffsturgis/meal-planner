var connect = require('connect');
var http = require('http');

var app = connect();

app.use(function(req, res){
  res.end('Here we go again');
})

http.createServer(app).listen(3000);
if (typeof(PhusionPassenger) !== 'undefined') {
  console.log('Example app running inside Passenger.');
} else {
  console.log('Example app listening on http://127.0.0.1:3000/');
}

var express = require('express')
var app = express()


app.use(express.static(__dirname + '/app'));
app.use("/lib", express.static(__dirname + '/lib'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
// Require the http module 
var http=require('http');
//require your custome module
var dt = require('./myModule');
//Create an HTTP server
http.createServer(function (req,res){
    //Set the Response header
    res.writeHead(200,{'Content-Type':'text/html'});
    //Use the custom module to get the data and time
    res.write("The data and time is currently: "+dt.myDateTime());
    //End the response
    res.end();
}).listen(8300);//Server listens on port 8300
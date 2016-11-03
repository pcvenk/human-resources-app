
var http = require('http');
var employeeService = require('./lib/emplyees');

http.createServer(function (req, res){

    // A parsed url to work with in case there are parameters
    var _url;
    // In case the client uses lower case for methods.
    req.method = req.method.toUpperCase();
    console.log(req.method + '' +req.url);
    res.end('Current time is ' + Date.now());

    if(req.method != 'GET'){
        res.writeHead(501, {'Content-type': 'plain-txt'});
        return res.end(req.method + ' is not supported by this server');
    }


    if(_url = /^\/employees$/i.exec(req.url)){
        employeeService.getEmployees(function(error, list){
           if(error){
               //send a 500 error
           }
           //send the list with a 200 status code
        });

    }else if(_url = /^\/employees\/(\d+)$/i.exec(req.url)){
        employeeService.getEmployee(_url[1], function(error, element){
           if(error){
               //send a 500 error
           }
           if(!data){
               //send a 404 error
           }
           //send the element with a 200 status code
        });

    }else {
        //try to send a static file if exists
        //otherwise, send a 404
        }


}).listen(3010);
var fs = require('fs');

exports.send404 = function(res){
    console.error('Resource not found');

    res.writeHead(404, {
        'Content-type': 'text/plain'
    });
    res.end('Not found');
};

exports.sendJson = function(data, res){
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    //coverting data do JSON objects
    res.end(JSON.stringify(data));
};

exports.send500 = function(data, res){
    console.error(data.red);

    res.writeHead(500, {
        'Content-type': 'text/plain'
    });
    res.end(data);
};

exports.staticFile = function(staticPath){
    return function(data, res){
        var readStream;

        //fix so routes to /home and/home.html both work
        data = data.replace(/^(\/home)(.html)?$/i,'$1.html');
        data = '.' + staticPath + data;

        fs.stat(data, function(err, stats){
            if(error || stats.isDirectory()){
                return exports.send404(res);
            }

            readStream = fs.createReadStream(data);
            return readStream.pipe(res);
        });
    };
};
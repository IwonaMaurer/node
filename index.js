//zadanie 13.5

var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
               break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
OSinfo.print();


//zadanie 13.8


var http = require('http');
var fs = require('fs');


var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    var html = fs.readFileSync('./index.html');
    res.end(html);
    if (request.method === 'GET' && request.url === '/') {
        response.write('./index.html');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(8080);
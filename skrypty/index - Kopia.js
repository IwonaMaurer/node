
//zadanie 13.3

/*
var os = require('os');

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
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
*/

/*zadanie 13.5

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


var fs = require('fs');
var colors = require('colors');



fs.readdir('./modules', (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.writeFile('plik.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    
});

*/

//zadanie 13.6

var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(8080);











var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    var html = fs.readFileSync('./index.html');
    res.end(html);
}).listen(9000);
console.log('Serwer uruchomiony...');


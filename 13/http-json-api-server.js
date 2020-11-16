var http = require('http');
var url = require('url'); 
parsetime=(time)=> {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
} 
unixtime=(time)=> {return {unixtime: time.getTime()}} 

var server = http.createServer((req, res)=> {
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;
    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time);
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time); 
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result))
});
server.listen(Number(process.argv[2]));
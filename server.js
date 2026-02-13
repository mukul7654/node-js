

const http = require('http');
http.createServer((req, resp) => {
    resp.end("<h1>Hello</h1>")

}).listen(4200);
//http
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request,response) => {
    
    //lodash
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _.once(() => {
        console.log('HELLO!!');
    });
    greet();
    greet();
    
    //set header content type
    response.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':            
            response.statusCode = 301;
            response.setHeader('Location','/about'); //redirect
            response.end();
            break;    
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }
    
    //send an HTML file
    fs.readFile(path, (err,html) => {
        if(err) {
            console.log(err);
            response.end()
        } else {
            //response.write(html);
            response.end(html);
        }
    })

});

server.on('connection',(socket) => {
  console.log('New connection...');
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...');
});


// task 2 Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000


// importing the required modules

const http = require('http');


// Creating an HTTP server

const server = http.createServer((req, res) => {

    // setting the response header
    res.setHeader('Content-Type', 'text/html');

    // Writing the Response
    res.write('<h1>HELLO Node!!!!<h1>\n');

    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});
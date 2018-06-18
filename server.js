userPage = require('./userPage');
userList = require('./userList');
const seed = require('./seed');
// const Express = require('express');
// const router = new Express();

const http = require('http');
const port = 3000;
const server = http.createServer(seed);

server.get('/', (req, res){
    
})

server.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})




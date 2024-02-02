// server creating

// 1. http module

import { createServer } from "http";

const server=createServer(req,res=>{
    console.log('request has been made frome browser to server')
});

// port number, host, callback function
server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000')
})
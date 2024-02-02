// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello This is Dharmesh Makwana');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Amazing Wave Background  only CSS | CSS Animation</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <style>
          *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: sans-serif;
  }
  .container{
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      background: linear-gradient(12deg, #40e1ff,#8f86e7,#ff00e7);
      background-size: 400% 400%;
      background-attachment: fixed;
      animation: bg 10s ease infinite;
  }
  .wave-body{
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 80%;
      transform: translateX(-50%);
  }
  .wave{
      position: absolute;
      background-color: rgba(255,255,255,0.25);
      width: 200%;
      height: 200%;
      border-radius: 50%;
      animation: wave 8s linear infinite alternate;
  }
  .wave:nth-child(2){
      animation-delay: -10s;
  }
  .wave:nth-child(3){
      animation-delay: -4s;
  }
  @keyframes bg{
      0%,100%{
          background-position: 0% 0%;
      }
      50%{
          background-position: 100% 100%;
      }
  }
  @keyframes wave{
      0%{
          transform: translateX(-23%);
      }
      100%{
          transform: translateX(23%);
      }
  }
      </style>
      <div class="container">
          <div class="wave-body">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
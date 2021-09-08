// const http = require('http');

// const hostname = '127.0.0.1'; // localhost
// const port = 3000;

// const server = http.createServer(function(req, res){
//   res.statusCode = 200;
//   // res.writeHead(200);
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }
// // server.listen(port);
// );

// app.js

var express = require('express');
var app = express();

// get 방식으로 접속한 사용자 중 / 에 접속한 사용자가 있다면 두 번째 인자로 넘겨준 함수가 실행
app.get('/', (req, res) => {
  res.send('helloooooooo');
});

// get 방식으로 접속한 사용자 중 /login 에 접속한 사용자가 있다면 두 번째 인자로 넘겨준 함수가 실행
app.get('/login', (req, res) => {
  res.send('this is login!!!!!!!!')
})

app.get('/splash', (req, res) => {
  res.send('this is login!!!!!!!!')
})

// 3000번 포트에 웹서버 구동
app.listen(3000, () => {
    console.log('connected 3000 port ~~~~~')
});
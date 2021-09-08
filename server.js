// var express = require('express');
// var app = express();
// var router = require('./router/main')(app);

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// var server = app.listen(3000, function(req,res){
//     console.log("Express server has started on port 3000")
// });

// app.use(express.static('public'));

//@@@@@
// server.js
// 모듈 import
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// 서버 생성
var app = http.createServer(function (req, res) {
    var reqUrl = req.url;   // 클라이언트로부터 요청이 온 urlStr
    var parsedUrl = url.parse(reqUrl, true);  // 요청받은 urlStr -> urlObj로 변환
    
    var pathname = parsedUrl.pathname;
    console.log(pathname);

    if(pathname == '/test') {
        fs.readFile(__dirname + '/views/test.html', function (err, result) {
            if(err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('404 : NOT FOUND');
            }else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(result);
            }
        });
    }
    if(pathname == '/image') {
        fs.readFile(__dirname + '/views/image.html', function (err, result) {
            if(err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('404 : NOT FOUND');
            }else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(result);
            }
        });
    }
    else if(pathname == '/next') {
        fs.readFile(__dirname + '/views/next.html', function (err, result) {
            if(err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('404 : NOT FOUND');
            }else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                console.log("RESULT:"+result);
                res.end(result);
            }
        });
    }
    else if(pathname == '/splash') {
        fs.readFile(__dirname + '/views/splash.html', function (err, result) {
            if(err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('404 : NOT FOUND');
            }else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                console.log("RESULT:"+result);
                res.end(result);
            }
        });
    }
    
    else if(pathname == '/writeAf') {
        var body = '';
        req.setEncoding('utf-8');
        req.on('data', function (data) {
            body += data;   // post 방식으로 받은 데이터들이 query string 형식의 문자열 형태로 출력이 된다.
            dataObj = qs.parse(body);   // 문자열을 JSON Obj형식으로 변환
        });
        req.on('end', function () {
            var title = dataObj.title;
            var content = dataObj.content;

            // 요청받은 데이터를 이용하여 파일생성
            fs.writeFile(__dirname + '/data/' + title, content, function (err) {
                if(err) {
                    console.log('file write fail... : ' + err.message);
                    res.end('file write fail.....');
                }else {	// 파일작성이 에러없이 완료됬을 경우에는
                    res.writeHead(301, {'Location': '/'});	// 상태코드 301을 응답하여 redirection
                    res.end();
                }
            });
        });
    }else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('404 : NOT FOUND');
    }
});

// 포트번호 3000에서 서버 실행
app.listen(3000, function () {
    console.log('Server listens on port 3000...');
});

// var http = require('http');
// var fs = require('fs');
// var querystring = require('querystring');
// const port = 3000;

// var server = http.createServer(function(req, res) {

//     if(req.method == 'GET'){
//         fs.readFile('./test.html' ,'utf8' ,function(error, data) {
//             res.writeHead(200, {'Content-Type' : 'text/html'});
//             res.end(data);
//         });
//     }
//     else if(req.method == 'POST'){
//         req.on('data', function(chunk){
//             console.log(chunk.toString());
//             var data = querystring.parse(chunk.toString());
//             res.writeHead(200, {'Content-Type' : 'text/html'});
//             res.end('ID : ' + data.id + 'PW : ' + data.pw);
//         });
//     }

// }).listen(port, function() {
//     console.log('Server is running...');
// });
var http = require('http');
var fs = require('fs');
var url=require('url');// I'm going to use the module called url

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData=url.parse(_url, true).query;
  var title=queryData.id;
  console.log(queryData.id);

  console.log(url);
  if (_url == '/') {
    title='Welcome';
  }
  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  fs.readFile(`data/${queryData.id}`, 'utf8', function(err, discription){
    var template=`
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${discription}</p>
    </body>
    </html>
    `;
    response.end(template);
  });




  // console.log(__dirname + url);

  // response.end(fs.readFileSync(__dirname + _url));//reading files

});
app.listen(3000);

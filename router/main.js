module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });

     app.get('/about',function(req,res){
        res.render('about.html');
    });

    app.get('/test',function(req,res){
        res.render('test.html');
    });

    app.post('/next',function(req,res){
        res.render('next.html');
    });

}

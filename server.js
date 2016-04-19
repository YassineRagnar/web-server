var express=require('express');
var PORT=process.env.PORT || 3000;
var server=express();
middleware=require('./middleware');

server.use(middleware.logger);
server.get('/',function(req,res){
	res.send('Connection OK');
});
server.get('/Trains',middleware.requireAuthentification ,function(req,res){
	res.send('Morroco Trains');
})
server.listen(PORT);


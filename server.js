var express=require('express');
var PORT=3000;
var server=express();
var middleware={
	requireAuthentification:function(req, res, next){
		console.log('private route');
		next();
	},
	logger:function(req, res, next){
		console.log(req.method+' '+req.originalUrl);
		next();
	}
}

server.use(middleware.logger);
server.get('/',function(req,res){
	res.send('Connection OK');
});
server.get('/Trains',middleware.requireAuthentification ,function(req,res){
	res.send('Morroco Trains');
})
server.listen(PORT);


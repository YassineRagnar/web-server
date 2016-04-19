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
	res.send('connection OK');
});
server.get('/Trains',middleware.requireAuthentification ,function(req,res){
	res.send('Morroco Trains');
})
server.listen(PORT);


//C:\Users\Yassine>git config --global user.name "Yassine Ragnar"

//C:\Users\Yassine>git config --global user.email "yassinemorsaoui@gmail.com"

//C:\Users\Yassine>git config --global push.default matching

//C:\Users\Yassine>git config --global alias.co checkout
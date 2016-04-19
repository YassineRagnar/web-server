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

module.exports=middleware;
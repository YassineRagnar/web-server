var express=require('express');
var PORT=process.env.PORT || 3000;
var server=express();
var middleware=require('./middleware');
var db=require('./database');

server.use(middleware.logger);
server.get('/',function(req,res){
	res.send('Connection OK');
});
server.get('/Trips',middleware.requireAuthentification ,function(req,res){
		if(req.query.start && req.query.end){
            console.dir(req.query.start);console.dir(req.query.end);
            findCustomeTrip(req,res,req.query.start,req.query.end);
        }
        else 
			res.send('Morroco Trains');
})

function findCustomeTrip(req,res,start,end){
    db.find('Trips', {"Start.Name":start,"End.Name":end}, function (err,  
  resources) {
  res.json(resources);
  });
}

//
server.listen(PORT);
//
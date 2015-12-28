var http=require("http");
http.createServer(function(req,res){
	var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case '':
			res.writeHead(200,{'Content':'text/plain'});
			res.end('HomePage');
			break;
		case '/about':
			res.writeHead(200,{'Content':'text/plain'});
			res.end('AbourPage');
			break;
		default:
			res.writeHead(404,{'Content':'text/plain'});
			res.end('NotFound');
			break;
	}
}).listen(3000);
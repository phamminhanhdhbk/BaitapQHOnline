var http = require('http'),
fs =require('fs');

http.createServer(function(req,res)
	{
		var path ='../BAI3.6/moi.mp4';
		var stat =fs.statSync(path);
		 var total =stat.size;

	if(req.headers.range)
	{
		var range = req.headers.range;
		var parts =range.replace(/bytes=/,"").split("-");
		var partialstart = parts[0];
		var partialend = parts[1];
		var start = parseInt(partialstart,10);
		var end = partialend ? parseInt(partialend,10) :total-1;
		var chunk = (end - start)+1;
				res.writeHead(206,{
				'Content-Range':'bytes '+start+' - '+end +'/'+ total,
				'Accept-Ranges' :'bytes',
				'Content-Lengh':chunk,
				'Content-Type' :'video/mp4',


		}
		);



		var file = fs.createReadStream(path,{start :start ,end :end});

		file.pipe(res);



	}

	else {

			res.writeHead(200,{'Content-Length':total ,'Content-Type':'video/mp4'});
			fs.createReadStream(path).pipe(res);
		
	}


	}).listen(6969,"127.0.0.1");
console.log("127.0.0.1:6969");



// 'Content-Range':'bytes start - end/total',
// 'Accept-Ranges' :'bytes',
// 'Content-Lengh':'end -start',
// 'Content-Type' :'video/mp4',
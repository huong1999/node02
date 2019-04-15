//BUOC 1:Import module http v� fs
const http = require('http');
const fs = require('fs');

const port =8080;

//BUOC 2: Khoi tao server
const server = http.createServer(function(req,res){
	// Bien request: l� bien l�u tru th�ng tin gui l�n cua client
	// Bien response: l� bien l�u tru c�c th�ng tin tra ve cho client
	
	if(req.url=='/hello') {
		if(req.method == "GET"){
			res.write('world');
			res.end;
		}
		else if(req.method == "POST"){
			res.write('world created');
			res.end;
		}
		else if(req.method == "PUT"){
			res.write('world updated');
			res.end;
		}
		else if(req.method == "DELETE"){
			res.write('world deleted');
			res.end;
		}
		// K?t th�c
       	 	res.end();
	}
	else {
		res.writeHead(200, {"Content-Type": "text/plain"});
        		res.write('URL not found!');
    
		// Ket th�c
       	 	res.end();
	}
	
	
});

//BUOC 3: Lang nghe cong 8080 thi thuc hien ch��ng trinh
server.listen(port,'localhost',function(err){
	if(!err)	console.log('Server is running on '+ port);
	else	console.log(err);
});

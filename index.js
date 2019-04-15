/*
--------------ĐỀ BÀI-------------------
* Không được sử dụng thư viện ở bên ngoài, chỉ được sử dụng những thư viện có sẵn của NODEJS (fs,http,...).
* Sử dụng biến môi trường để nhận vào "PORT" và "HOST" khi khởi động ứng dụng.

*/


//BUOC 1:Import module http
const http = require('http');

//Sử dụng biến môi trường để nhận vào "PORT" và "HOST"
const port = process.env.PORT;
const host = process.env.HOST;

//BUOC 2: Khởi tạo server
var server = http.createServer(function(req,res){
	// Biến request: là biến lưu trữ thông tin gửi lên của client
	// Biến response: là biến lưu trữ các thông tin trả về cho client
	res.writeHead(200, {"Content-Type": "text/plain"});
	if(req.url=='/hello') {
		if(req.method == "GET"){
			res.write('world');
			
		}
		else if(req.method == "POST"){
			res.write('world created');
			
		}
		else if(req.method == "PUT"){
			res.write('world updated');
			
		}
		else if(req.method == "DELETE"){
			res.write('world deleted');
			
		}
		// Kết thúc
       	 	res.end();
	}
	else {
		res.write('URL not found!');
		// Kết thúc
       	 	res.end();
	}
});

//BUOC 3: Lắng nghe cổng port thì thực hiện chương trình
server.listen(port,host,function(err){
	if(!err)	console.log('Your port is ${port}, ${host}');
	else	console.log(err);
});

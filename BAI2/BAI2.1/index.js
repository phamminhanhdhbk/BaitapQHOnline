var events =require('events'),
 emitter = new events.EventEmitter(), // lấy sự kiện để bắn lên server;
 username ="minhanh.itqn",
 password = "123456";

//Khai báo server
 emitter.on("account",function(username,pass){
 	console.log("Username "+ username +"pass "+pass);
 });


// bắn lên server

emitter.emit("account",username,password);

// var events = require("events");
// emitter =new events.EventEmitter();//tạo đối tượng emitter
 // bước 1 : Khai báo dùng Emitter


// bước 2 : khai báo server hứng required từ dưới client
// emitter.on("log",function(message){
	// console.log(message);
// });



// bước 3:Dùng emitter đẩy request lên server 

// emitter.emit("log","Chào bạn Phạm Minh Ánh");

// SỬ DỤNG EVENTEMITTER

"use strict";
var EventEmitters =require('events').EventEmitter; // tạo class EVENTEMITTER

class Logger extends EventEmitters{
 
 constructor()
 {
 	super();
 	this.msg ="Chưa có dữ liệu trên server";
 }

 onLog()
 {
 	this.on('log',function(msg)
 		{
 			console.log("Log : "+msg);

 		});

 }
onEmit(msg)
{
	if (msg) 
	{
		this.msg =msg;
		// statement
	} 

	this.emit('log',this.msg);

}

}

var logger =new Logger(); //tạo đối tượng
logger.onLog(); // khởi tạo đối tượng onLog tương đương với verver
logger.onEmit() // gủi request lên server thông qua onEmit


















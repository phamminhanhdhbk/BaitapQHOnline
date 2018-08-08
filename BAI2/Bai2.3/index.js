var events =require('events');
var util =require('util');
var Persion =function(name)
{
	this.name =name;
}
util.inherits(Persion, events.EventEmitter);

var tuan = new Persion("Phạm Minh Ánh");
var anh = new Persion("Phạm Minh Tuấn");
var dien = new Persion("Phạm Minh Điền");

var people = [tuan,anh,dien];

people.forEach(function(pp){
	pp.on("speak",function(msg){
		console.log(pp.name+"   "+msg);
	});
});
tuan.emit("speak","Chào bạn tèo và bạn tủn");
anh.emit("speak","Chào bạn tèo và bạn tủn");
dien.emit("speak","Chào bạn tèo và bạn tủn");
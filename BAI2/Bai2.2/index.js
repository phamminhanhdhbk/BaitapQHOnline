"use strict"; // sử dụng strict mode
class Diem{// đây là class

	constructor()// Hàm khởi tọa là là được tạo khi chúng ta vừa tạo đối tượng
	{
		console.log("Bạn mới tạo đối tượng");

	}
	baodiem(){ // đây là function
console.log("Điểm của bạn là 10");
	}
}

var tuan = new Diem; // khai bao đối tượng
tuan.baodiem();

class Info{// đây là class

	constructor(diachi,ten)// Hàm khởi tọa là là được tạo khi chúng ta vừa tạo đối tượng
	{
		this.diachi =diachi;
		this.ten = ten;

	}
	khaibao()
	{ // đây là function

		console.log("Tên của bạn là  : "+this.ten+ " Địa chỉ là : "+this.diachi);
	}
}

var doituong = new Info("Nghĩa thắng ","Phạm Minh Ánh"); // Khai báo đối tượng khi hàm khởi tạo có tham số truyền vào ;
doituong.khaibao();

"use strict";
class HocSinh{

	constructor(ten,tuoi)
	{
		this.ten =ten;
		this.tuoi=tuoi;
	}

	info()
	{
		return console.log("ho và tên : "+this.ten +" Tuổi "+this.tuoi);
	}
}

var hocsinh =new HocSinh("Phạm Minh Ánh",28);
hocsinh.info();

class GiaoVien extends HocSinh{

	constructor(ten,tuoi,kinhnghiem)
	{
		super(ten,tuoi);
		this.kinhnghiem =kinhnghiem;

	}

	info()
	{
		return super.info()+"Kinh nghiệm của giáo viên "+this.kinhnghiem;
	}
}

var giaovien = new GiaoVien("Phạm Minh Ánh",28,"10 năm php");

console.log(giaovien.info());


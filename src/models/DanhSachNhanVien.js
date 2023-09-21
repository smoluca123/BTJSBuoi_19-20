function DanhSachNhanVien() {
  this.debug = [
    {
      taiKhoan: 'test1',
      hoTen: 'Nguyễn Văn A',
      email: 'test1@gmail.com',
      ngayLam: '09/18/2023',
      gioLam: 200,
      chucVu: 'Sếp',
      loaiNV: 'Xuất Sắc',
      luongCB: 300000,
      tongLuong: 900000,
    },
    {
      taiKhoan: 'test2',
      hoTen: 'Nguyễn Văn B',
      email: 'test2@gmail.com',
      ngayLam: '09/18/2023',
      gioLam: 160,
      chucVu: 'Trưởng phòng',
      loaiNV: 'Khá',
      luongCB: 300000,
      tongLuong: 900000,
    },
  ];
  this.listNV = [];

  this.themNV = function (nv) {
    this.listNV.push(nv);
  };
  this.timNV = function (fill) {
    return this.listNV.filter((item, index) => {
      fill = fill.toLowerCase().trim();
      return item.loaiNV.toLowerCase().includes(fill);
    });
  };

  this.findIndexNVByTaiKhoan = function (taiKhoan) {
    for (var i = 0; i < this.listNV.length; i++) {
      if (this.listNV[i].taiKhoan === taiKhoan) {
        return i;
      }
    }
  };
  this.getInfoNVByTaiKhoan = function (taiKhoan) {
    var index = this.findIndexNVByTaiKhoan(taiKhoan);
    return this.listNV[index];
  };
  this.deleteNV = function (taiKhoan) {
    var index = this.findIndexNVByTaiKhoan(taiKhoan);
    this.listNV.splice(index, 1);
  };
  this.updateNV = function (nv) {
    var index = this.findIndexNVByTaiKhoan(nv.taiKhoan);
    this.listNV[index] = nv;
  };
}

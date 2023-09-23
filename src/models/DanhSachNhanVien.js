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
  this.removeVietnameseDiacritics = function (str) {
    return str
      .normalize('NFD') // Chuyển chuỗi thành Unicode Normalization Form D (NFD)
      .replace(/[\u0300-\u036f]/g, ''); // Loại bỏ tất cả các ký tự Unicode trong khoảng U+0300 đến U+036F
  };
  this.timNV = function (fill) {
    fill = fill.toLowerCase().trim();
    return this.listNV.filter((item, index) => {
      return this.removeVietnameseDiacritics(item.loaiNV)
        .toLowerCase()
        .includes(this.removeVietnameseDiacritics(fill));
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

function NhanVien(
  taiKhoan,
  hoTen,
  email,
  password,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.password = password;
  this.ngayLam = ngayLam;
  this.luongCB = +luongCB;
  this.chucVu = chucVu;
  this.gioLam = +gioLam;
  this.tongLuong = 0;
  this.loaiNV = 'Chưa xác định';

  this.tinhTongLuong = function () {
    this.tongLuong =
      this.chucVu == 'Sếp'
        ? this.luongCB * 3
        : this.chucVu == 'Trưởng phòng'
        ? this.luongCB * 2
        : this.luongCB;
  };
  this.xepLoaiNV = function () {
    this.loaiNV =
      this.gioLam >= 192
        ? 'Xuất sắc'
        : this.gioLam >= 176
        ? 'Giỏi'
        : this.gioLam >= 160
        ? 'Khá'
        : 'Trung bình';
  };
}

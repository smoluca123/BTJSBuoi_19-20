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
  this.listNV = this.debug;

  this.themNV = function (nv) {
    this.listNV.push(nv);
  };
  this.timNV = function (fill) {
    return this.listNV.filter((item, index) => {
      fill = fill.toLowerCase().trim();
      return item.loaiNV.toLowerCase().includes(fill);
    });
  };
}

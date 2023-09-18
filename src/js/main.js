// Short querySelector
const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
const danhSachNV = new DanhSachNhanVien();

function getInfoNV() {
  var taiKhoan = $a('#tknv').value;
  var hoTen = $a('#name').value;
  var email = $a('#email').value;
  var password = $a('#password').value;
  var ngayLam = $a('#datepicker').value;
  var luongCB = $a('#luongCB').value;
  var chucVu = $a('#chucvu').value;
  var gioLam = $a('#gioLam').value;
  var form = $a('.modal-body form');
  const nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    password,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );
  nhanVien.tinhTongLuong();
  nhanVien.xepLoaiNV();
  form.reset();
  getToday();
  return nhanVien;
}

function themNV() {
  const nhanVien = getInfoNV();
  danhSachNV.themNV(nhanVien);
  renderNV(danhSachNV.listNV);
}

function renderNV(arr) {
  var content = '';
  var table = $a('#tableDanhSach');
  for (var item of arr) {
    content += `
        <tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.loaiNV}</td>
        </tr>
    `;
  }
  table.innerHTML = content;
}

function timNV() {
  var fill = $a('#searchName').value;
  const newListNV = danhSachNV.timNV(fill);
  renderNV(newListNV);
}

function genInfo() {
  $a('#name').value = getRandomName();
  $a('#email').value = getRandomEmail();
  $a('#tknv').value = getRandomUser();
  $a('#luongCB').value = getRandomLuongCB();
  $a('#chucvu').value = getRandomRole();
  $a('#gioLam').value = getRandomGioLam();
}

renderNV(danhSachNV.listNV);

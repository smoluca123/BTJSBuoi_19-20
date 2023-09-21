const danhSachNV = new DanhSachNhanVien();

getLocalStorage();

function getInfoNV() {
  var taiKhoan = $a('#tknv').value;
  var hoTen = $a('#name').value;
  var email = $a('#email').value;
  var password = $a('#password').value;
  var ngayLam = $a('#datepicker').value || getToday();
  var luongCB = $a('#luongCB').value;
  var chucVu = $a('#chucvu').value;
  var gioLam = $a('#gioLam').value;
  var form = $a('.modal-body form');

  // validation
  const valid = [
    //* Validation Tài khoản
    checkEmpty(taiKhoan, '#tbTKNV', 'Tài khoản không được trống'),
    checkLength(
      taiKhoan,
      4,
      6,
      '#tbTKNV',
      'Tài khoản từ 4-6 ký tự',
      'Tài khoản không được trống'
    ),
    //* Validation Họ tên
    checkEmpty(hoTen, '#tbTen', 'Họ tên không được trống'),
    checkString(hoTen, '#tbTen', 'Họ tên không được chứa chữ số'),
    //* Validation Email
    checkEmail(email, '#tbEmail', 'Email không đúng định dạng'),
    //* Validation Ngày làm
    checkEmpty(ngayLam, '#tbGiolam', 'Ngày làm không được trống'),
    //* Validation Lương cơ bản
    checkEmpty(luongCB, '#tbLuongCB', 'Lương cơ bản không được trống'),
    checkLuongCB(luongCB, '#tbLuongCB', 'Lương cơ bản hợp lệ từ 1M - 20M'),
    //* Validation mật khẩu
    checkEmpty(password, '#tbMatKhau', 'Mật khẩu không được trống'),
    checkPassword(password, '#tbMatKhau', 'Mật khẩu quá dễ'),
  ];

  if (valid.includes(false)) return false;
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
  if (nhanVien) {
    danhSachNV.themNV(nhanVien);
    renderNV(danhSachNV.listNV);
    setLocalStorage();
  }
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
            <td>
              <button class="btn btn-info" data-toggle="modal"
              data-target="#myModal" onclick="suaNV('${item.taiKhoan}')">Sửa</button>
              <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xóa</button>
            </td>
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

function suaNV(taiKhoan) {
  var nhanVien = danhSachNV.getInfoNVByTaiKhoan(taiKhoan);
  $a('#tknv').value = nhanVien.taiKhoan;
  $a('#name').value = nhanVien.hoTen;
  $a('#email').value = nhanVien.email;
  $a('#datepicker').value = nhanVien.ngayLam;
  $a('#luongCB').value = nhanVien.luongCB;
  $a('#chucvu').value = nhanVien.chucVu;
  $a('#gioLam').value = nhanVien.gioLam;
  $a('#tknv').disabled = 'true';
}

function updateNV() {
  const nhanVien = getInfoNV();
  if (nhanVien) {
    danhSachNV.updateNV(nhanVien);
    renderNV(danhSachNV.listNV);
    setLocalStorage();
    $a('#myModal').click();
    notiAlert('top-end', 'success', 'Sửa thành công', false, 1000);
  }
}

function xoaNV(taiKhoan) {
  // console.log(taikhoan);
  danhSachNV.deleteNV(taiKhoan);
  renderNV(danhSachNV.listNV);
  setLocalStorage();
  notiAlert('top-end', 'success', 'Xóa thành công', false, 1000);
}

function setLocalStorage() {
  localStorage.setItem('listNV', JSON.stringify(danhSachNV.listNV));
}

function getLocalStorage() {
  var listNV = JSON.parse(localStorage.getItem('listNV'));
  if (listNV) {
    danhSachNV.listNV = listNV;
    renderNV(danhSachNV.listNV);
  }
}

function genInfo() {
  $a('#name').value = getRandomName();
  $a('#email').value = getRandomEmail();
  $a('#tknv').value = getRandomUser();
  $a('#luongCB').value = getRandomLuongCB();
  $a('#chucvu').value = getRandomRole();
  $a('#gioLam').value = getRandomGioLam();
  $a('#password').value = generatePassword();
}

function notiAlert(position, status, title, showBtn, timeClose, width) {
  Swal.fire({
    position: position,
    icon: status,
    title: title,
    showConfirmButton: showBtn,
    timer: timeClose,
    width: width || 400,
  });
}

renderNV(danhSachNV.listNV);

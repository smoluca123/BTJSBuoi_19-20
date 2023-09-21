// Short querySelector
const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

function checkDuplicateTaiKhoan(listNV, value, idNoti, mess) {
  if (value) {
    for (var i = 0; i < listNV.length; i++) {
      if (listNV[i].taiKhoan == value) {
        $a(idNoti).innerHTML = mess;
        $a(idNoti).style.display = 'block';
        return false;
      }
    }
    $a(idNoti).innerHTML = '';
    $a(idNoti).style.display = 'none';
    return true;
  }
}

function checkEmpty(value, idNoti, mess) {
  if (value == '') {
    $a(idNoti).innerHTML = mess;
    $a(idNoti).style.display = 'block';
    return false;
  }
  $a(idNoti).innerHTML = '';
  $a(idNoti).style.display = 'none';
  return true;
}

function checkLength(value, min, max, idNoti, mess) {
  if (value) {
    if (value.length < min || value.length > max) {
      $a(idNoti).innerHTML = mess;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).innerHTML = '';
    $a(idNoti).style.display = 'none';
    return true;
  }
}

function checkString(value, idNoti, mess) {
  if (value) {
    var regex = /^[A-Za-z\u00C0-\u1EF9\s]+$/;
    var isValid = regex.test(value);
    if (!isValid) {
      $a(idNoti).innerHTML = mess;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).innerHTML = '';
    $a(idNoti).style.display = 'none';
    return true;
  }
}

function checkEmail(value, idNoti, mess) {
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!regex.test(value)) {
    $a(idNoti).innerHTML = mess;
    $a(idNoti).style.display = 'block';
    return false;
  }
  $a(idNoti).style.display = 'none';
  return true;
}

function checkLuongCB(value, idNoti, mess) {
  if (value) {
    if (value < 1000000 || value > 20000000) {
      $a(idNoti).innerHTML = mess;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).style.display = 'none';
    return true;
  }
  return false;
}

function checkPassword(value, idNoti, mess) {
  if (value) {
    var regex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=\\|])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=\\|]{6,10}$/;

    if (!regex.test(value)) {
      $a(idNoti).innerHTML = mess;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).style.display = 'none';
    return true;
  }
  return false;
}

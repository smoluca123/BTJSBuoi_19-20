// Short querySelector
const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
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

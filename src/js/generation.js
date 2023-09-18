const vietnameseLastNames = [
  'Nguyễn',
  'Trần',
  'Lê',
  'Phạm',
  'Huỳnh',
  'Hoàng',
  'Phan',
  'Vũ',
  'Võ',
  'Đặng',
  'Bùi',
  'Đỗ',
  'Hồ',
  'Ngô',
  'Dương',
  'Lý',
  'Lương',
  'Lưu',
  'Ninh',
  'Tạ',
  'Thạch',
  'Đinh',
  'Hà',
  'Lê',
  'Mai',
  'Kim',
  'Kiều',
  'Sơn',
  'Tô',
  'Chu',
  'Trịnh',
  'Ân',
  'La',
  'Lục',
  'Tăng',
  'Cao',
  'Kiểm',
  'Khoa',
  'Tưởng',
  'Triệu',
  'Châu',
  'Thái',
  'Tôn',
  'Hứa',
  'Từ',
  'Uông',
  'Tôn Thất',
];

const vietnameseNames = [
  'Văn A',
  'Thị B',
  'Hoàng C',
  'Minh D',
  'Thị E',
  'Văn F',
  'Thị G',
  'Hoài H',
  'Thành I',
  'Văn J',
  'Thị K',
  'Đình L',
  'Ngọc M',
  'Minh N',
  'Thị O',
  'Văn P',
  'Minh Q',
  'Thị R',
  'Minh S',
  'Thị T',
  'Thanh U',
  'Thị V',
  'Thành X',
  'Thị Y',
  'Minh Z',
  'Thị Mỹ',
  'Văn Nam',
  'Hoàng Long',
  'Thị Hằng',
  'Minh Tuấn',
  'Thị Ngọc Anh',
];

const suffixEmail = ['@gmail.com', '@yahoo.com', '@hotmail.com'];

const listRole = ['Sếp', 'Trưởng phòng', 'Nhân viên'];

const listLuongCB = Array.from(
  { length: 20 },
  (_, index) => (index + 1) * 1000000
);

function genRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

function getRandomItemArr(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function getRandomName() {
  return `${getRandomItemArr(vietnameseLastNames)} ${getRandomItemArr(
    vietnameseNames
  )}`;
}

function getRandomEmail() {
  return `nhanvien.${genRandomString(4)}${getRandomItemArr(suffixEmail)}`;
}

function getRandomUser() {
  return `user.${danhSachNV.listNV.length + 1}`;
}

function getRandomLuongCB() {
  return getRandomItemArr(listLuongCB);
}

function getRandomRole() {
  return getRandomItemArr(listRole);
}

function getRandomGioLam() {
  return Math.floor(Math.random() * (200 - 150 + 1) + 150);
}

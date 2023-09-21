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

function generatePassword() {
  const specialChars = '!@#$%^&*()_+{}[]:;<>,.?~';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';

  const allChars =
    specialChars + lowercaseChars + uppercaseChars + numericChars;
  const passwordLength = Math.floor(Math.random() * 5) + 6; // Random length from 6 to 10

  let password = '';
  password += specialChars[Math.floor(Math.random() * specialChars.length)];
  password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += numericChars[Math.floor(Math.random() * numericChars.length)];

  for (let i = 4; i < passwordLength; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password.split('');
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}

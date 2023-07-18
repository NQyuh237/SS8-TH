// cach khai bao bien
// var x = 5;
// var x = 8;
// let fullName = "Nguyễn Quang Huy"
// let char = 'C';
// let check = false;
// console.log(fullName);
// console.log(char);
// console.log(true);
// let y = 4;
// console.log(y);
// block - khối lệnh - phạm vi của biến {...}
//hàm tự xây dựng có chức năng in
// function print() { var x = 6; }
// sử dụng hàm
// prin();
// console.log(x);
//khai báo hằng
// const PI = 3.14;
// console.log(PI);

// let fullName = "fullName";
// console.log(fullName);
// let check = true
console.log(3 + 4); //7
console.log(5 - 7); //-2
console.log(3 * 4); //12
console.log(5 / 7); //0.8333333333333334
console.log(5 % 7); //1
let z = 5; // ++ đều dung để tăng giá trị lên 1 đơn
let temp = ++z; // trả về giá trị sau khi tăng khi viết ++ ở trước, ngược lại trả về giá trị sau khi giảm khi viết ++ ở sau
console.log(temp); //
console.log(z); //
// z += 1; //z=z+1
//z *= x + 1; // z=z(x+1) 
let express = z * (temp + 1);
console.log(express); //

let str1 = "nguyen";
let str2 = "huy";
let number = 10
// cách 1
console.log(str1 + " " + str2 + number); // nguyenhuy
// cách 2
console.log(str1.concat("", str2, number))
// cách 3
let string = "hi i im fi, 25 tuoi, dang bi chu dau troc san duoi";
console.log(`hi i im ${str2}, ${number} tuoi, dang bi chu dau troc san duoi`)

let diemHoa = prompt("nhap diem mon hoa")
console.log(diemHoa);
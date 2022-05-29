/**
Tinh tien luong nhan vien
-Dau vao
    +Luong 1 ngay: salary
    +So ngay lam: day
-Xu ly
    +Tao bien salary gan gia tri la 100.000
    +Tao bien day gan gia tri la 22 
    +Tao bien income gan gia tri la 0
    +income = salary x day
-Dau ra = 
    +Tien luong nhan vien= ?
 */
var salary = 100000;
var day = 22;
var income = 0;
var income = salary * day;
console.log("Bai tap 1: Tien luong nhan vien la " + income);

/**
Tinh gia tri trung binh 5 so thuc
-Dau vao
    +So thuc thu 1 R1
    +So thuc thu 2 R2
    +So thuc thu 3 R3
    +So thuc thu 4 R4
    +So thuc thu 5 R5
-Xu ly
    +Tao bien R1 gan gia tri la 1
    +Tao bien R2 gan gia tri la 2
    +Tao bien R3 gan gia tri la 3
    +Tao bien R4 gan gia tri la 5
    +Tao bien R5 gan gia tri la 5
    +Tao bien trung binh la Average gan gia tri 0
    +Average = (R1 + R2 + R3 + R4 + R5) / 5
-Dau ra
    +Average = ?
 */
var R1 = 10;
var R2 = 20;
var R3 = 30;
var R4 = 40;
var R5 = 50;
var Average = 0;
Average = (R1 + R2 + R3 + R4 + R5) / 5;
console.log("Bai tap 2: Gia tri trung binh 5 so thuc la "+ Average);

/**
Quy doi tien
-Dau vao
    +Ty gia USD so voi dong VND
    +So tien USD can quy doi
-Xu ly
    +Tao bien Exchange gan gia tri la 23500
    +Tao bien Quantity gan gia tri la 10
    +Tao bien Money gan gia tri la 0
    +Money = Exchange x Number
-Dau ra
    +Money = ?
 */
var Exchange = 23500;
var Quantity = 25;
var Money = 0;
Money = Exchange * Quantity;
console.log("Bai tap 3: So tien quy doi la "+ Money);

/**
Tinh chu vi va dien tich hinh chu nhat
-Dau vao
    +Length
    +Width
-Xu ly
    +Tao bien Length gan gia tri la 35
    +Tao bien Width gan gia tri la 25
    +Tao bien Area gan gia tri la 0
    +Area = Length x Width
    +Tao bien Perimeter gan gia tri la 0
    +Perimeter = (Length + Width) x 2
-Dau ra
    +Area = ?
    +Perimeter = ?
 */
var Length = 35;
var Width = 25;
var Area = 0;
var Perimeter = 0;
Area = Length * Width;
Perimeter = (Length + Width) * 2;
console.log("Bai tap 4: Dien tich hinh chu nhat la " + Area);
console.log("Bai tap 4: Chu vi hinh chu nhat la " + Perimeter);

/**
Tinh tong 2 ky so
-Dau vao 
    +So co 2 chu so Number gia tri 89
-Xu ly
    +Tach lay hang don vi: Math.floor(Number % 10)
    +Tach lay hang chuc: Math.floor(Number % 100 /10)
    +Tong = so_hang_dv + so_hang_chuc
-Dau ra
    +Tong Number1 = ?
    +Tong Number2 = ?
 */
var Number = 89;
var so_hang_chuc = Math.floor( Number % 100 / 10);
var so_hang_dv = Math.floor(Number % 10);
Tong = so_hang_dv + so_hang_chuc;
console.log("Bai tap 5: Tong 2 ky so la " + Tong);

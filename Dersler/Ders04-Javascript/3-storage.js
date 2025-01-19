//LOCAL STORAGE
// Local Storage, tarayıcıda veri saklamak için kullanılan bir API'dir.

// Local Storage'a veri eklemek için setItem() metodu kullanılır.

// Local Storage'dan veri almak için getItem() metodu kullanılır.

// Local Storage'dan veri silmek için removeItem() metodu kullanılır.

// Local Storage'daki tüm verileri silmek için clear() metodu kullanılır.

// Local Storage'daki verileri görmek için console'da localStorage yazılabilir.

// Local Storage'da veri saklamak için sadece string veri tipi kullanılabilir.

// Local Storage'da veri saklamak için JSON.stringify() ve JSON.parse() metotları kullanılabilir.



// Local Storage'a veri eklemek

// let userName = "Büşra";
// localStorage.setItem("name", userName);

// Local Storage'dan veri almak

// let name = localStorage.getItem("name");
// console.log(name);

// let yas = 21;
// localStorage.setItem("age", yas);
// let age = Number(localStorage.getItem("age"));
// console.log(age);
// console.log(typeof age);

// let user = {
//     name: "Büşra",
//     age: 21,
//     city: "İstanbul",
//     langs: ["Python", "Java", "Javascript"],
// };
// localStorage.setItem("userDetail", JSON.stringify(user));

// let userDetail = JSON.parse(localStorage.getItem("userDetail"));
// console.log(userDetail);

// let users = [
//     {name: "Büşra", age: 21},
//     {name: "Ali", age: 22},
//     {name: "Veli", age: 23},

// ];
// localStorage.setItem("users", JSON.stringify(users));

// let usersDetail = JSON.parse(localStorage.getItem("users"));

// usersDetail.map(user => { document.write(`
//     <p>${user.name} - ${user.age}</p>`);
// });

//Session Storage
//tarayıcı kapatıldığında veriler silinir.

// let users = [
//     {name: "Büşra", age: 21},
//     {name: "Ali", age: 22},
//     {name: "Veli", age: 29},

// ];
// sessionStorage.setItem("users", JSON.stringify(users));

// let usersDetail = JSON.parse(sessionStorage.getItem("users"));

// usersDetail.map(user => { document.write(`
//     <p>${user.name} - ${user.age}</p>`);
// });

// let filteredUsers = usersDetail.filter(user => user.age < 26);

// filteredUsers.map(user => { document.write(`<p>${user.name} - ${user.age}</p>`)});

// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];
// let langs = ["Python", "Java", "Javascript", "Php", "C#"];

// const result = numbers.reduce((toplam, number) => {
//     return toplam + number;
// },0);
// console.log(result);

//Spread Operator
// const result = [...langs, ...numbers];
// console.log(result);

// langs = [...langs, "C++"];
// console.log(langs);

// Destructing Assignment
let user = {
  name: "Büşra",
  age: 21,
  city: "İstanbul",
  lang: ["Java", "Python", "Javascript"],
};
let { name, age, ...geriKalanlar } = user;
console.log(name,age, geriKalanlar);//name i yazar geri kalanları obje olarak yazar.
//obje anahtar kelimelerle aynı olmalıdır.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...c] = numbers;
console.log(a, b, c);
//arraylar de anahtar kelime olmadığı için kendi a,b demiş.yani obje gibi anahtar kelime olmaz.








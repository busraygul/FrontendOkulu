// JS GİRİŞ

console.log("Merhaba Javascript");

// Değişkenler

//NUMBER
// var a = 10; 
// var b = 3.14; 

// String
// var c = "Javascript"; 

// console.log(a);
// console.log(typeof a);
// console.log(a,b,c);


//OTOMATİK TİP DÖNÜŞÜMLERİ

// var firstNumber = 10;
// var secondNumber = "20";
// var result = firstNumber + secondNumber; 
//+ olduğunda string ve numberı birleştirir.

// console.log(result)
// console.log(typeof result);

// var result = firstNumber - secondNumber; 
// - olduğunda matematik işlemi olduğunu anlar ve çıkarma işlemi yapar type de number döndürür.

// console.log(result)
// console.log(typeof result);

//hoisting!
var firstNumber;
console.log(firstNumber);
firstNumber = 20;
deneme();
function deneme(){
    console.log("deneme fonksiyonu");
}

//BOOLEAN(true,false)

// var isActive = true;
// if(age){
//     age>=18 ? console.log("Ehliyet alabilir") : console.log("Ehliyet alamaz");
// }

//UNDEFINED-TANIMSIZ

var userName;
console.log(userName);
console.log(typeof userName);

//NULL-BOŞ

var isNull = null;
console.log(isNull);
console.log(typeof isNull);
//null primitive bir veri tipidir.

//OBJECT-Nesne!

var user = {
name: 'Büşra',
age: 21,
isActive: true,
notlar:{
    mat:100,
    fizik:90,
},
favoriteColors:['kırmızı','mavi','yeşil'],

};
console.log(user);
console.log(typeof user);
console.log(user.name);
console.log(user.notlar.mat);

//ARRAY-Diziler!
var fruits = ['elma','armut','muz'];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//Function-Fonksiyonlar
function hello(){
    console.log("Merhaba JS!");
}
hello();
console.log(hello);
console.log(typeof hello);

//Date-Tarih
// var date = new Date();
// console.log(date);
// console.log(typeof date);


// var a = 10;
// var b = a;
// console.log("1-",a,b);
// a = 20;
// console.log("2-",a,b);

// var a = [10];
// var b = a;
// console.log("1-",a,b);
// a = [20];
// console.log("2-",a,b);
// console.log("3-",a * b);

// var a = [10,20,30,40,50];
// var b = a;
// console.log("1-",a , b);
// //a[0] = 60;//burda yeni bir atama yapmadık. a'nın referansını değiştirmedik. a'nın referansı değişmediği için b'de değişti.
// a.push(60);
// console.log("2-",a , b);

//Scope-Kapsam
// var a = 10; //Global Scope

// function scope(){
//     var b = 20; //Function Scope
//     console.log(a,b);
// }
// scope();
// if(true){
//     var c = 30; //Block Scope
//     b = 40;
// }
// {
//     var d = 40; //Block Scope
// }
// console.log(a,b,c,d);
//fonskiyon içindeki değişkene dışarıdan erişilemez.

//eğer block içerisindekilerin de dışarıdan erişilememesini istiyorsak let kullanmalıyız.

//TİP DÖNÜŞÜMLERİ
// var a = 5;
// console.log(a,typeof a);
// a = String(a);
// console.log(a,typeof a);

// var a = "5";
// console.log(a,typeof a);
// a = Number(a);
// console.log(a,typeof a);

// var a = "deneme";
// console.log(a,typeof a);
// a = Number(a);
// console.log(a,typeof a);
//NaN (Not a Number) çıktısı verir ama tipi numberdır.

// var a = 5+"2";
// console.log(a,typeof a);

// var a = 5 - "2";
// console.log(a,typeof a);  //çıkarma işlemi olduğu için number döner.

//OPERATÖRLER

//ATAMA OPERATÖRLERİ(=)
// const a = 10;

//ARİTMETİK OPERATÖRLER(+,-,*,/,%,**)
// console.log(10+5); //Toplama
// console.log(10-5); //Çıkarma
// console.log(10*5); //Çarpma
// console.log(10/5); //Bölme 
// console.log(10%5); //Mod alma
// console.log(10**5); //Üs alma

//MATH Fonksiyonları

let sonuc = Math.PI;
sonuc = Math.round(3.6); //yuvarlama
sonuc = Math.ceil(3.2); //yukarı yuvarlama
sonuc = Math.floor(3.9); //aşağı yuvarlama
sonuc = Math.sqrt(16); //karekök alma
sonuc = Math.random(); //0-1 arasında rastgele sayı üretme
sonuc = Math.floor(Math.random()*100); //0-100 arasında aşağıya yuvarlanmış rastgele sayı üretme
console.log(sonuc);

//STRING METODLARI
let value;
// const firstName = "Büşra";
// const lastName = "Aygül";
// const department = "Yazılım Mühendisliği";
// const age = 21;

// value = firstName + " " + lastName;
// console.log(value);

// value = "Büşra ";
// value += "" + lastName;

// value = firstName.length;
// value = firstName.toUpperCase(); //büyük harfe çevirme
// value = firstName.toLowerCase(); //küçük harfe çevirme
// value = firstName[0]; //ilk harfi alma
// value = firstName[firstName.length-1]; //son harfi alma
// value = firstName.indexOf("ş"); //harfin indexini alma
// value = firstName.includes("c"); //harf var mı yok mu kontrolü
// value = firstName.concat(" ",lastName," - ",department); //birleştirme
// value = "İsim: " +firstName + " " + "\nSoyisim:" +lastName+ " " + "\nYaş:" +age+" " + "\nBölümü:"+ department+ " ";

// //Template Literals
// value = `İsim: ${firstName}
// Soyisim:${lastName}
// Yaş:${age}
// Bölümü:${department}`;
// //option ve , ile backtick yapılıyor.

// value = `
// <ul>
//     <li>${firstName}</li>
//     <li>${lastName}</li>
//     <li>${age}</li>
//     <li>${department}</li>
// </ul>`;


//ARRAY METODLARI

// const langs = ["Python","Java","C++","Javascript"];
// const numbers = [13,22,31,47,5,64,76,8,98];

// value = numbers.length; //eleman sayısı
// value = numbers[0]; //ilk eleman
// value = numbers[numbers.length-1]; //son eleman
// value = numbers.indexOf(47); //elemanın indexisini alma
// value = numbers.includes(47); //elemanın varlığını kontrol etme
// value = numbers.push(100); //eleman ekler
// value = numbers.unshift(1); //başa eleman ekler
// value = numbers.pop(); //son elemanı siler
// value = numbers.shift(); //ilk elemanı siler
// value = numbers.reverse(); //elemanları ters çevirir
// value = numbers.sort(); //elemanları sıralar
// value = numbers.sort(function(x,y){
//     return x-y}); //küçükten büyüğe sıralama

// console.log(numbers);



//OBJECT  
// const student = {
//     fullName: "Büşra Aygül",
//     age: "21",
//     adress:{
//         city:"İstanbul",
//         country:"Türkiye",
//     },
//     langs:["JavaScript","Swift","C"],
//     work:function(){
//         console.log("Çalışmıyor...");
//         return "Çalışmıyor...";
//     },
// };
// value = student;
// value = student.fullName;
// value = student.langs[0];
// value = student.work();

// let date = new Date();
// value = date;
// value = date.getMonth()+1;//bulunduğumuz ayın indexini verir.
// value = date.getDate();//bulunduğumuz günü verir.
// value = date.getDay();//haftanın gününü verir.
// value = date.getFullYear();//yılı verir.
// value = date.getHours();//saati verir.
// value = date.getMinutes();//dakikayı verir.
// value = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;//tarih formatı

//Karşılaştırma Operatörleri
// a=10;
// b=20;
// c="10";
// d=10;

// value = a==b; //eşit mi
// value = a==d;
// value = a==c;
// value = a===c; //hem değer hem tip eşit mi
// value = a!=b; //eşit değil mi
// value = a!==c; //hem değer hem tip eşit değil mi
// value = a>b; //büyük mü
// value = a<b; //küçük mü
// value = a>=b; //büyük eşit mi

// Mantıksal Operatörler
// && (And) ve
// value = (a>b) && (a==d);
// || (Or) veya
// value = (a>b) || (a==d);

//Koşullar

// let a = 10;
// let b = 20;
// if(a>b){
//     value = `${a} büyüktür ${b}`;
// }else if(a==b){
//     value = `${a} eşittir ${b}`;
// }
// else{
//     value = `${a} küçüktür ${b}`;}

// const islem = 3;
// switch(islem){
//     case 1:
//         value = "İşlem 1";
//         break;
//     case 2:
//         value = "İşlem 2";
//         break;
//     case 3:
//         value = "İşlem 3";
//         break;
//     default:
//         value = "Geçersiz işlem";
//         break;
// }

//Döngüler
//For Döngüsü
for (let i = 0; i < 10; i++) {
    if(i==3){
        //break;
        continue;//3'ü atlar.
    }
    console.log(i);
    
}
const langs = ["Python","Java","C++","Javascript"];
for (let i=0;i<=langs.length-1;i++){
    console.log(langs[i]);
}
//console.log(value);

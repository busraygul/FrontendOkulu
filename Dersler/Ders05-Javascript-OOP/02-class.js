//Class
// Classlar ES6 ile birlikte gelmiştir. 
// Classlar bir blueprint'tir. Classlar ile objeler oluşturulur.

// class Employee {
//     constructor(name,age,salary){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfos(){
//         console.log(`İsim: ${this.name} \nYaş: ${this.age} \nMaaş:${this.salary}`);
//     }
// }
// const emp1 = new Employee("Büşra",21,100000);

// console.log(emp1);
// emp1.showInfos();

//Static Method
//Nesne üzerinden değil, sınıf üzerinden çağırılır.

// class Matematik{
//     cube(x){
//         console.log(x * x * x);
//     }
//     static cube2(x){
//         console.log(x * x * x);
//     }
// }

// const math = new Matematik();
// // math.cube2(3);//hata verir. çünkü static fonksiyone erişemez.
// math.cube(3);

// Matematik.cube2(3);//static fonk.a direkt sınıf üzerinden erişilir.

// Math.random();//static fonksiyonlar sınıf üzerinden erişilir. Math sınıfı gibi.

//Inheritance (Kalıtım)
// Bir sınıfın özelliklerini başka bir sınıfa aktarmak için kullanılır.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(`İsim: ${this.name} \nYaş: ${this.age}`);
    }
}
class Employee extends Person{
    constructor(name,age,salary){
        // this.name = name;
        //this.age = age; //bu kısımı yazarsak super de bulunsa bile onu ezer ve ilk bunu okur.
        super(name,age);
        this.salary = salary;
    }
}

const emp = new Employee("Büşra",21,100000);
console.log(emp);
emp.showInfos();

//Object Literal

// const person1 = {
//     name: "Büşra",
//     age: 21,
//     langs: ["Python", "Java", "Javascript"],
//     address: {
//         city: "İstanbul",
//         street:"Tuzla"
//     },
//     showInfos: function(){
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// };

// const person2 = {
//     name: "Fatih",
//     age: 22,
//     langs: ["Python", "Java", "Javascript"],
//     address: {
//         city: "İstanbul",
//         street:"Pendik"
//     },
//     showInfos: function(){
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// };
// console.log(person1);
// console.log(person2);

//Yapıcı Fonksiyon (Constructor)

//yukarıda manuel olarak 2 kere yazdık ama burada person fonksiyonu ile bir kere yazdık.
function Person(name,age,langs){
    this.name = name;
    this.age = age;
    this.langs = langs;

    // this.showsInfos = function(){
    //     console.log(this.name, this.age, this.langs);
    // };
}

//Fonksiyonu prototype ile tanımladık.
//Bu şekilde fonksiyonu her çağırdığımızda bellekte ayrı ayrı oluşturulmaz.

Person.prototype.showInfos = function(){
    console.log(this.name, this.age, this.langs);
}

function Employee(name,age,langs,salary){
    Person.call(this, name,age,langs);
    this.salary =salary;
}
//Person fonksiyonundan miras aldık.
Employee.prototype = Object.create(Person.prototype);//showInfosu kullanabilmek için Person fonksiyonundan miras aldık.

const emp1 = new Employee("Zehra",22,["C","C++","C#"],10000);
const emp2 = new Employee("Büşra",21,["Javascript","Swift","C"],20000);

console.log(emp1);
console.log(emp2);
emp1.showInfos();//salary gözükmez çünkü showInfos Person fonksiyonundan miras aldı. person fonk. da salary yok.

const person1 = new Person("Büşra", 21,['Javascript','Swift','C']);
const person2 = new Person("Fatih", 22,['Javascript','Python','Java']);

// console.log(person1);
// console.log(person2);

// person1.showInfos();
// person2.showInfos();

// console.log(person1.langs);






// Lưu trữ thông tin của Nguyên
// let nguyen_name = "Nguyên Nguyễn";
// let nguyen_age = 18;
// let nguyen_gender = true;

// let nguyen = ["Nguyên Nguyễn", 18, true];
// let nguyen = {
//     name: "Nguyễn Nguyễn",
//     age: 18,
//     gender: true
// }

// let long = {
//     name: "Long Võ",
//     age: 19,
//     gender: true
// }

// let nhan = {
//     name: "Nhàn Hoàng",
//     age: 20,
//     gender: false
// }

// let c0822g1 = [nguyen, long, nhan]
// c0822g1[2].name

// console.log(nguyen["name"])
// console.log(nguyen["gender"])
// console.log(nguyen["age"])

// console.log(nguyen.name)
// console.log(nguyen.gender)
// console.log(nguyen.age)

// console.log(nguyen[0]);
// console.log(nguyen[1]);
// console.log(nguyen[2]);

// let c0822g1 = [
//     ["Nguyên Nguyễn", 18, true],
//     ["Long Võ", 18, true],
//     ["Nhàn Hoàng", 20, false],
// ]

// console.log(c0822g1[1][0])

// object
    // 1. proterties/fields
    // 2. methods
    // 3. contructor

function Student(name, age, gender,email){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.greeting = function(){
        return `Hello, my name is ${this.name}, and I'm ${this.age} years old.`
    }
}


let nguyen = new Student("Nguyên Nguyễn", 18, true, "nguyen@gmail.com");
console.log(nguyen.greeting())
let long = new Student("Long Võ", 19, true, "nguyen@gmail.com");
console.log(long.greeting())
// let nhan = new Student()

// ECMAScript


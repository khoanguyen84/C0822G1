// Arrow Function (hàm mũi tên)
// những loại function trong js
// 1. Function Declaration 
console.log(sum(10, 20));

function sum(n_1, n_2) {
    return n_1 + n_2;
}
// 2. Function expression

// const time = function (n_1, n_2) {
//     return n_1 * n_2;
// }
const time = (n_1, n_2) => n_1 * n_2;
console.log(time(10, 20));

// const hello = function(msg){
//     console.log(msg);
// }
const hello = (msg) => console.log(msg);
// const hello = msg => console.log(msg);

hello("CodeGymers");

// const slogen = function(){
//     console.log("1 + 1 = 2");
// }
const slogen = () => onsole.log("1 + 1 = 2");

slogen()
// 3. Anonymous/callback function

let numbers = [3, 4, 5, 5];
// let result = numbers.reduce(function (total, value) {
//     return total + value;
// })
let result = numbers.reduce((total, value) => total + value)

console.log(result);


// class
// function Student() {

//     this.greeting() = function () {

//     }
// }
class Student {

    greeting(){

    }
}
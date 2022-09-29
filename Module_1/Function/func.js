// parameter: tham số
// agrument: đối số

// 1. định nghĩa hàm (define function)
function sayHello(name){
    // console.log(`Hello, ${name}`);
    // console.log("Hello, " + name);
    // document.write(`Hello, ${name}`);
    return `Hello, ${name}`;
}

// 2. thực thi hàm (execute functon)
// let hello_1 = sayHello("Thiện");
// document.write(hello_1);

document.write(sayHello("Thiện"))


// let hello_2 = sayHello("Yên");
// console.log(hello_2)

console.log(sayHello("Yên"))

let hello_3 = sayHello("Toàn");
document.getElementsByTagName("h1")[0].innerText = hello_3;

let hello_4 = sayHello("Long");
// alert(hello_4)


// Math.floor(Math.random())

// generateArray
// 10 và các giá trị [10, 30]
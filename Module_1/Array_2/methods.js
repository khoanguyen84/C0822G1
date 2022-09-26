// 1. toString()
let numbers = [1, 3, 5, 7, 9];
// let str = ""
// for(let i = 0 ; i < numbers.length; i++){
//     if(i < numbers.length - 1){
//         str += `${numbers[i]},`;
//     }
//     else{
//         str += `${numbers[i]}`;
//     }
// }
// console.log(str)
// console.log(numbers.toString());

// 2. join()
// console.log(numbers.join("+"));

// 3. push()
numbers.push(11, 13, 15, 17)

// 4. unshift()
numbers.unshift(100, 200)
// console.log(numbers)

// 5. pop() 
// console.log(numbers.pop())

// 6. shift()
// console.log(numbers.shift())

// 7. splice()
// numbers.splice(2,0,2,2)
// console.log(numbers)
// numbers.splice(2, 2)
// console.log(numbers)

// numbers.splice(numbers.length - 3, 3);
// console.log(numbers)

// 8. delete()
// console.log(numbers.length)
// delete numbers[0];
// console.log(numbers.length)


// 9. concat()
let class_A = ["Yên", "Trung"]
let class_B = ["Toàn", "Nguyên"]

let class_C = class_A.concat(class_B, "Nhàn");

console.log(class_C);

// 10. slice()
let class_D = class_C.slice(1, 4)
console.log(class_D)
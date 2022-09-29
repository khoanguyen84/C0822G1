// let numbers = new Array(10);
// for(let i= 0 ; i< 10; i++){
//     numbers[i] = Math.floor(Math.random()*(30 - 10 + 1) + 10);
// }

// console.log(numbers)

// let numbers_1 = new Array(10);
// for(let i= 0 ; i< 10; i++){
//     numbers_1[i] = Math.floor(Math.random()*(30 - 10 + 1) + 10);
// }

// console.log(numbers_1)
function generateArray(size, min, max) {
    console.log(size, min, max);
    let numbers = new Array(size);
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(numbers)
    // return numbers;
}

generateArray(5, 10);
// let numbers = generateArray(10, 5, 25);
// console.log(numbers)

// function calculateArray(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     document.write(total)
// }

// calculateArray(numbers)
// document.write("<br>")
// calculateArray([6, 7, 8, 8, 6, 4, 34, 3])
// document.write(generateArray(5, 100, 200))
// document.getElementsByTagName('h1')[0].innerText = generateArray(15, 32, 78).toString();
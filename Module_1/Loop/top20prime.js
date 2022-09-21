// let number = 2;
// let countOfDivisor = 0;
// let top20Primes = 0;
// while(top20Primes <= 20){
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             countOfDivisor++;
//         }
//     }
//     if( countOfDivisor == 0){
//         top20Primes++;
//         console.log(number);
//     }
//     number++;
//     countOfDivisor = 0;
//     // if (countOfDivisor == 0) {
//     //     console.log(`${number} is prime`);
//     // }
//     // else {
//     //     console.log(`${number} is not prime`);
//     // }
// }


let maxValue = 100;
let count = 0;
let number = 2;
do {
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            count++;
        }
    }
    if (count == 0) {
        console.log(number);
    }
    number++;
    count = 0;
}
while (number <= maxValue)
// for (let number = 2; number <= maxValue;number++) {
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             count++;
//         }
//     }
//     if(count == 0){
//         console.log(number);
//     }
//     count = 0;
// }
// while (number <= maxValue) {
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             count++;
//         }
//     }
//     if(count == 0){
    //         console.log(number);
    //     }
    //     number++;
    //     count = 0;
    // }

// callback
// 1. phải là 1 hàm
// 2. phải được truyền vào 1 hàm khác, thông qua agrument
// 3. phải được thực thi

// function callback(n1, n2){
//     return n1 + n2;
// }

// function times(n1, n2){
//     return n1 * n2;
// }
// function useCallback(){
//     console.log(callback(5, 10));
// }
// useCallback()

// function useCallback(param){
//     console.log(param(5, 10));
// }

// useCallback(callback)
// useCallback(times)
// useCallback(function (n1, n2){
//     return n1 + n2;
// })
// useCallback(function (n1, n2){
//     return n1 * n2;
// })
// useCallback(function (n1, n2){
//     return n1 - n2;
// })

let numbers = [4, 6, 6, 3, 43, 6]

let result = numbers.reduce(function (total, value) {
    return total + value;
})
// console.log(process(20,20));
console.log(result);
// sort() : alphabel
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// chain
// fruits.sort().reverse()
// console.log(fruits)
// fruits.sort();
// console.log(fruits)

// fruits.reverse()
// console.log(fruits)

// reverse()

let numbers = [12, 1, 222, 21, 2, 3, 41, 4]

function compare(n1, n2){
    return n1 - n2; // > 0: 
}
numbers.sort(compare).reverse()
console.log(numbers)
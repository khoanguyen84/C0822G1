let min = 1990, max = 2010;
let size = 30;
let intergers = new Array(size);
let exist2004 = false;
let findValue = 2004;
let position = -1;
let evenNumbers = [];
for(let i = 0 ; i < size; i++){
    intergers[i] = Math.floor(Math.random()*(max - min + 1) + min);
}

console.log(intergers.toString());

// for(let i = 0 ; i < size; i++){
//     if(intergers[i] < findValue && intergers[i] % 2 == 0){
//         exist2004 = true;
//         position = i;
//         break;
//         // evenNumbers.push(intergers[i]);
//     }
// }

position = intergers.findIndex(function(number){
    return number < findValue && number % 2 == 0;
})
console.log(position != -1 ? `Exist at position: ${position}` : 'Not exist');

evenNumbers = intergers.filter(function(number){
    return number < findValue && number % 2 == 0;
})

console.log(evenNumbers.toString())
// console.log(exist2004 ? `Exist at position: ${position}` : 'Not exist');
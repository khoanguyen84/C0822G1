let numbers = [4, 6, 6, 3, 43, 6];
if(!Array.prototype.includes){
    Array.prototype.includes = function(){

    }
}
console.log(numbers.includes(3));
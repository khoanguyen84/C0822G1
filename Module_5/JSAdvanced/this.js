let numbers = [4, 6, 6, 33, 43, 6];
let numbers_2 = [4, 6, 6, 3, 43, 6];
if(!Array.prototype.includes_2){
    Array.prototype.includes_2 = function(value){
        // console.log(this);
        if(Array.isArray(this)){
            for(let i = 0; i < this.length; i++){
                if(this[i] === value){
                    return true
                }
            }
            return false;
        }
        return NaN
    }
}

console.log(numbers.includes_2(13));
console.log(numbers_2.includes_2(3));
class Staff{
    greeting(){
        return "hello anh em"
    }
}

Staff.prototype.hello = function(){
    return "Hello world"
}

let thien = new Staff();
console.log(thien.greeting())
console.log(thien.hello())

Array.prototype.includes_2 = function() {
    
}
// function Student(name, age, gender,email){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//     this.greeting = function(){
//         return `Hello, my name is ${this.name}, and I'm ${this.age} years old.`
//     }
// }

class Student{
    constructor(name, age, gender,email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
    greeting(){
        return `Hello, my name is ${this.name}, and I'm ${this.age} years old.`;
    }
    setMobile(mobile){
        this.mobile = mobile
    }
    getMobile(){
        return `${this.mobile.substring(0, this.mobile.length - 1)}X`
    }
    setHobbies(hobbies){
        this.hobbies = hobbies;
    }
    setLanguages(languages){
        this.languages = languages;
    }
    setGirlFriend(girl){
        this.girlFriend = girl;
    }
}

let nguyen = new Student("Nguyên Nguyễn", 18, true, "nguyen@gmail.com");
nguyen.setMobile("0935737475");
// console.log(nguyen.mobile)
nguyen.setHobbies(["Đá banh", "Chơi đá", "Nhậu"]);
nguyen.setLanguages([{name:"English", level:"A"}, {name: "Japan", level: "N4"}])

nguyen.setGirlFriend({
    name: "Huệ",
    age: 15,
    gender: false
})
// console.log(nguyen);

// console.log(nguyen.girlFriend.name)
console.log(nguyen.getMobile())
console.log(nguyen.mobile)


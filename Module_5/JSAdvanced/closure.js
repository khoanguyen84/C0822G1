// closure (hàm đóng)
// bên trong hàm, có thể truy câp và sử dụng biến/hàm bên ngoài hàm
// bên ngoài không thể truy cập và sử dụng những biến khai báo bên trong hàm

// function times2(number)
// {
//     return number*2;
// }
// let n2 = 10;

// function sum(n1)
// {

//     console.log(times2(n1) + n2);
//     n2-=10;
// }

// console.log(n2);
// sum(20);

// function countApp() {
//     let count = 0;
//     function increament() {
//         count += 1;
//         return count;
//     }

//     return increament;
// }

// let app = countApp();
// console.log(app());
// console.log(app());
// console.log(app());


// let students = ["Thiện", "Trung", "Khoa"]
function studentApp() {
    let students = ["Thiện", "Trung", "Khoa"]
    return {
        addStudent(name) {
            students.push(name)
        },
        getStudents() {
            return students.join('-')
        }
    };
}

let app = studentApp();
app.addStudent('Thư');
students = [];
console.log(app.getStudents());
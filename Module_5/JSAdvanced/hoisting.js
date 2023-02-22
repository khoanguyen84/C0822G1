// có 2 trường hợp
// TH1: khai báo biến bằng từ khóa var
// TH2: Function Declaration

// scope (phạm vi) của biến 
// 1. global (toàn cục)
// 2. local (cục bộ)
// 3. block code (khối lệnh)

// có 3 từ khóa để khai báo biến: let, var và const

// trong js nếu sử dụng 1 biến mà ko khai báo, thì nó sẽ tương đương với việc khai báo biến bằng từ khóa var
// // global
// let a = 5;

// function sum(){
//     // local
//     let a = 5;
// }

// {
//     {
//         {
//             // block code
//             let a = 5;
//         }
//     }
// }

// var i;
// for (i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(`i outsite for: ${i}`);

// for (let j = 1; j <= 5; j++) {
//     console.log(j);
// }

// console.log(`j outsite for: ${j}`);

let age = 20;
{
    let i = 0;
    console.log(i);
    {
        let i = 10;
        console.log(i);
        {
            {
                let i = 20;
                let age = 18;
                console.log(i);
            }
        }
        console.log(i);
    }
}

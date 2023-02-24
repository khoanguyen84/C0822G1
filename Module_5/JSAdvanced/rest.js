// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }

//     console.log(`Tổng cộng: ${total}`);
// }

// sum(1, 4, 5, 5, 3, 3, 5, 6, 6, 4, 3, 3, 56, 7, 67, 2)

function sum(message, n1, ...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }

    console.log(`${message}: ${total}`);
}

sum("Tổng cộng", 1, 4, 5, 5, 3, 3, 5, 6, 6, 4, 3, 3, 56, 7, 67, 2)
sum("Total", 1, 4, 5, 5, 3, 3, 5, 6, 6, 4, 3, 3, 56, 7, 67, 2)
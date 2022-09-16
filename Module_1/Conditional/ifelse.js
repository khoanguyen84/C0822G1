// if(Number.isNaN(Number(aveScore)) || aveScore < 0 || aveScore > 10){
//     result =  "invalid average score!";
// }
// if(aveScore >= 9 && aveScore <= 10){
//     result = "Xuất sắc";
// }
// if(aveScore >= 8 && aveScore < 9 ){
//     result = "Giỏi";
// }
// if(aveScore >= 7 && aveScore < 8){
//     result = "Khá";
// }
// if(aveScore >= 5 && aveScore < 7){
//     result = "Trung binh";
// }
// if(aveScore >= 0 && aveScore < 5){
//     result = "Yếu";
// }

// if(Number.isNaN(Number(aveScore)) || aveScore < 0 || aveScore > 10){
//     result =  "invalid average score!";
// }
// else{
//     if(aveScore >= 9 && aveScore <= 10){
//         result = "Xuất sắc";
//     }
//     else{
//         if(aveScore >= 8 && aveScore < 9 ){
//             result = "Giỏi";
//         }
//         else{
//             if(aveScore >= 7 && aveScore < 8){
//                 result = "Khá";
//             }
//             else{
//                 if(aveScore >= 5 && aveScore < 7){
//                     result = "Trung binh";
//                 }
//                 else{
//                     result = "Yếu";
//                 }
//             }
//         }
//     }
// }


// if(Number.isNaN(Number(aveScore)) || aveScore < 0 || aveScore > 10){
//     result =  "invalid average score!";
// }
// else if(aveScore >= 9 && aveScore <= 10){
//         result = "Xuất sắc";
//     }
//     else if(aveScore >= 8 && aveScore < 9 ){
//             result = "Giỏi";
//         }
//         else if(aveScore >= 7 && aveScore < 8){
//                 result = "Khá";
//             }
//             else if(aveScore >= 5 && aveScore < 7){
//                     result = "Trung binh";
//                 }
//                 else{
//                     result = "Yếu";
//                 }


function calculator(){
    // b1: lấy value trong input average score
    let aveScore = document.getElementById('aveScore').value;
    // b2: xử lý -> kết quả
    let result = "";
    switch(true){
        case Number.isNaN(Number(aveScore)) || aveScore < 0 || aveScore > 10:{
            result =  "invalid average score!";
            break;
        }
        case aveScore >= 9 && aveScore <= 10:{
            result = "Xuất sắc";
            break;
        }
        case aveScore >= 8 && aveScore < 9 :{
            result = "Giỏi";
            break;
        }
        case aveScore >= 7 && aveScore < 8 :{
            result = "Khá";
            break;
        }
        case aveScore >= 5 && aveScore < 7 :{
            result = "Trung Bình";
            break;
        }
        case aveScore >= 0 && aveScore < 5 :{
            result = "Yếu";
            break;
        }
    }
    // b3: đưa kết quả vào input rank
    document.getElementById('rank').value = result;
}
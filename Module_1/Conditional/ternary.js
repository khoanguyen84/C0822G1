// let name = "Nhàn";
// let gender = false;
// let married = true;
// if(gender){
//     console.log(`Mr. ${name}`)
// }
// else{
//     if(married){
//         console.log(`Mrs. ${name}`)
//     }
//     else{
//         console.log(`Ms. ${name}`)
//     }
// }

// gender == true ?  console.log(`Mr. ${name}`) :  
//                     married == true ?
//                             console.log(`Mrs. ${name}`) :
//                             console.log(`Ms. ${name}`) ;


// console.log(`${gender == true ? 'Mr' : married == true ? 'Mrs' : 'Ms'}. ${name}`);

// console.log(`${gender ? 'Mr' : married ? 'Mrs' : 'Ms'}. ${name}`);

let aveScore = 8.9;
console.log(`${Number.isNaN(Number(aveScore)) || aveScore < 0 || aveScore > 10 ? 'Invalid Score' :
                                                aveScore >= 9 ? 'Xuất sắc' :
                                                    aveScore >= 8 ? 'Giỏi' :
                                                        aveScore >= 7 ? 'Khá' :
                                                            aveScore >= 5 ? "TB" : "Yếu"} `)
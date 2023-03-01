// module
// export: 
//  + TH1: export default, trong 1 file thì chỉ có duy nhất 1 lần được export default
//  + TH2: export, trả về 1 đối tượng
// import
//  + TH1: import default, sử dụng tên của đối tượng được export
//  + TH2: import
export function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}

export function times(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total *= rest[i]
    }
    return total;
}

export function power(n, x) {
    let result = 1;
    for (let i = 0; i < x; i++) {
        result *= n
    }
    return result;
}

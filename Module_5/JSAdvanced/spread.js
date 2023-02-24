// pass_by_value (tham trị): dành cho các kiểu dữ liệu nguyên thủy: number, string, boolean
// pass_by_reference (tham chiếu): array, object, function

// let club_football = ["Quang", "Thiện", "Trung"];
// let club_walking = club_football;
// let club_walking = ["Quang", "Thiện", "Trung"]
// let club_walking = [...club_football]
// club_walking[2] = "Khoa";

// console.log(club_football);
// console.log(club_walking);

let thien = {
    name: "Thiện",
    age: 18,
    gender: true
}

// let trung = thien;

// let trung = { ... thien}
// trung.name = "Trung";

let trung = {
    ...thien,
    name: "Trung"
}
// console.log(trung);
// console.log(thien);

let club_1 = ["Thiện", "Trung", "Khoa"];
let club_2 = [...club_1, "Quang"]

console.log(club_1);
console.log(club_2);
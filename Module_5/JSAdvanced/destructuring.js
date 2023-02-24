let club_football = ["Quang", "Thiện", "Trung"];

// let player_1 = club_football[0];
// let player_2 = club_football[1];
// let player_3 = club_football[2];

let [player_1, player_2, player_3] = club_football;

// console.log(player_1, player_2, player_3);


let trung = {
    name: "Trung",
    age: 18,
    gender: true,
    greeting : function(){
        console.log(`Tôi tên là ${name}, năm nay tôi ${age} tuổi!`);
    }
}

let {name, age, greeting, gender} = trung;

greeting();
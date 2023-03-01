// function renderPosts() {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "GET"
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (posts) {
//             let htmls = posts.map(function (post) {
//                             return `
//                                 <tr>
//                                     <td>${post.id}</td>
//                                     <td>${post.title}</td>
//                                     <td>${post.body}</td>
//                                 </tr>
//                             `
//                         })
//             document.getElementById('tbPosts').innerHTML = htmls.join("")
//         })
// }
function renderPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    })
        .then(async function (response) {
            let posts = await response.json();
            let htmls = posts.map(function (post) {
                return `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>
                `
            })
            document.getElementById('tbPosts').innerHTML = htmls.join("")
        })
}
renderPosts()

// function inputValue(){
//     document.getElementById('result').innerHTML = document.getElementById('content').value
// }
function inputValue(e){
    document.getElementById('result').innerHTML = e.target.value;
}

// document.getElementById('content').oninput = function(e){
//     document.getElementById('result').innerHTML = e.target.value;
// }
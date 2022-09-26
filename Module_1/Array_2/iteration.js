let jobs = ["Java", "React", "React", "PHP"];
// ["<h1>Java</h1>", "<h1>React</h1>", "<h1>React</h1>", "<h1>PHP</h1>"];
// 1. for..in
// for(let index in jobs){
//     console.log(`${index}-${jobs[index]}`)
// }
// 2. for..of
// for(let job of jobs){
//     console.log(`${jobs.indexOf(job)}-${job}`)
// }
// 3. forEach
// jobs.forEach(function(job, index){
//     console.log(`${index}-${job}`)
// })

// 4.map()
let jobMap = jobs.map(function(job, index){
    return `<h1>${job}</h1>`
})
// for(let index in jobs){
//     jobs[index] = `<h1>${jobs[index]}</h1>`;
// }

// console.log(jobMap)
console.log(jobs.includes("react"))
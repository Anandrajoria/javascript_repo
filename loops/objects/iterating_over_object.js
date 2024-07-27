let testScore={
    a:67,
    b:2,
    c:56,
    d:67,
    e:89,
    f:57,
    g:56,
    h:98
}

// for(let i in testScore){
//     console.log(`${i} :${testScore[i]}`);
// }

let total =0;
let scores =Object.values(testScore)
for(var score of scores){
    total+=score
}
console.log(total/scores.length);
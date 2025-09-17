

// function printNumbers(from, to){
//     let current=from

//     let timerId=setInterval(()=>{
//         console.log(current);
//         if(current==to){
//             clearInterval(timerId)
//         }current++
//     },1000)
// }
// printNumbers(1, 5)


// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             current++;
//             setTimeout(go, 1000);  // Schedule the next call
//         }
//     }

//     go();  // Start the first call immediately
// }
// printNumbers(1,5)


function printTable(num){
    let current=num;
    let to=num*10

    function go(){
        console.log(current);
        if(current<to){
            current=current+num;
            setTimeout(go,1000)
        }
    }
    go()
}
printTable(4)
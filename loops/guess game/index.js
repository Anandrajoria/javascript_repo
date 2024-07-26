let maximum = (prompt("enter your max num or (type q to leave the game)"));

if(maximum==='q'){
    console.log("quit at first");
}else{
    maximum=parseInt(maximum)
while(!maximum) {
    maximum = parseInt(prompt("enter valid num"));
}


const targetNum = Math.floor(Math.random()*maximum)+1;
// console.log(targetNum);

let guess = prompt("enter your first guess(type q to quit the game)")
let attempts =1;



while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    guess=parseInt(guess)
    
    if(guess>targetNum){
        guess=(prompt("too high guess again"))
        attempts++
    }else if(guess<targetNum){
        guess=(prompt("too low guess again"))
        attempts++
    }else{
        guess=prompt("invalid guess")
    }
}
if(guess==='q'){
    console.log("ok you quit!!!");
}else{
console.log(`you got this it took you ${attempts} attempts`);
}

}
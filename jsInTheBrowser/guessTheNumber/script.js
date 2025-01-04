'use strict'

/* //!basic understanding of dom
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent='correct number'

document.querySelector('.number').textContent=13
document.querySelector('.score').textContent=23

console.log(document.querySelector('.guess').value=23);
*/

const number=Math.ceil(Math.random()*20+1)


document.querySelector('.number').textContent=number

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
        console.log( typeof guess);
        
    if(!guess){
        document.querySelector('.message').textContent='🚫no number'
    }
})
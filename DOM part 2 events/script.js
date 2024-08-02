// let btn=document.querySelector('#v2')

// // !onclick

// btn.onclick=function(){
//     console.log('you clicked me');
    
// }

// // !onmouseenter

// function scream(){
//     console.log('Aaaaaahhhh');
//     console.log('stop touching me');
// }
// btn.onmouseenter=scream;

// document.querySelector("h1").onclick=function(){
//     alert("wrong click")
// }


// // ! addEventListner
// const button = document.querySelector("#v3")
// button.addEventListener('click',function(){
//     alert("code run")
// })

// function twist(){
//     console.log('twist');
// }

// function shout(){
//     console.log('shout');
// }
// let tasbtn=document.querySelector('#tas')
// // tasbtn.onclick=shout;
// // tasbtn.onclick=twist;

// tasbtn.addEventListener('click',twist,{once:true})
// tasbtn.addEventListener('click',shout)


// let btn=document.querySelector("button")
// let h1=document.querySelector('h1')
// btn.addEventListener('click',function(){
//     let newcolor=randomColor()
//     document.body.style.backgroundColor=newcolor
//     h1.innerText=newcolor
// })


// let randomColor=()=>{
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     return `rgb(${r},${g},${b})`
// }

// let buttons=document.querySelectorAll('button')

// for(let button of buttons){
//     button.addEventListener('click',colorize)
// }

// let h1s=document.querySelectorAll("h1")
// for(let h1 of h1s){
//     h1.addEventListener('click',colorize)
// }

// function colorize(){
//     console.log(this);
//     this.style.backgroundColor=randomColor()
//     this.style.color=randomColor()
// }

// document.querySelector('button').addEventListener('click',
//     function(evt){
//         console.log(evt);
//     }
// )

// let input=document.querySelector('input')
// input.addEventListener('keydown',function(e){
//     console.log(e.key);
//     console.log(e.code);

// })
// input.addEventListener('keyup',function(){
//     console.log('keyup');
// })

// window.addEventListener('keydown',function(e){
//     console.log(e.code);
// })


// ! from event

// let form=document.querySelector('#shelterForm')
// let input=document.querySelector('#catName')
// let list=document.querySelector('#list')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(input.value);

//     let catName=input.value;

//     const newli=document.createElement('li')
//     newli.innerText=catName

//     console.log(newli);

//     list.append(newli);
//     input.value='';
// })



// let tweetForm=document.querySelector('#tweetForm');
// let tweetContainer=document.querySelector('#tweet');
// tweetForm.addEventListener('submit',function(e){
//     e.preventDefault()
//     // let userNameInput=document.querySelectorAll('input')[0]
//     // let tweetInput=document.querySelectorAll('input')[1]
//     // console.log('sumbit'); 
//     let usernameInput=tweetForm.elements.username;
//     let tweetInput=tweetForm.elements.tweet
    
//     addTweet(usernameInput.value,tweetInput.value)
//     usernameInput.value='';
//     tweetInput.value='';
    
    
// })

// const addTweet=(username,tweet)=>{
//     let newTweet=document.createElement('li')
//     let btag=document.createElement('b')
//     btag.append(username)
//     newTweet.append(btag)
//     newTweet.append(`-${tweet}`)
//     // console.log(newTweet);
//     tweetContainer.append(newTweet)
// }


// const input=document.querySelector('input')
// let h1=document.querySelector('h1')

// input.addEventListener('input',function(){
//     h1.innerText=input.value;
    
// })

// const input=document.querySelector('input')
// let h1=document.querySelector('h1')

// input.addEventListener('input',function(){
//     h1.innerText=`Welcome, ${input.value}`;
    
// })



// ! event bubbling

// let button=document.querySelector('#changeColor')
// let Container=document.querySelector('#container')
// button.addEventListener('click',function(e){
//     Container.style.backgroundColor=randomColor()
//     e.stopPropagation()   //!stop event bubbling
// })

// Container.addEventListener('click',function(){
//     Container.classList.toggle('hide')
// })
// let randomColor=()=>{
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     return `rgb(${r},${g},${b})`
// }


// !event delegation

let tweetForm=document.querySelector('#tweetForm');
let tweetContainer=document.querySelector('#tweet');


// let lis=document.querySelectorAll('li')
// for(let li of lis){
//     li.addEventListener('click',function(){
//         li.remove()
//     })
// }


tweetForm.addEventListener('submit',function(e){
    e.preventDefault()
    // let userNameInput=document.querySelectorAll('input')[0]
    // let tweetInput=document.querySelectorAll('input')[1]
    // console.log('sumbit'); 
    let usernameInput=tweetForm.elements.username;
    let tweetInput=tweetForm.elements.tweet
    
    addTweet(usernameInput.value,tweetInput.value)
    usernameInput.value='';
    tweetInput.value='';
    
    
})

const addTweet=(username,tweet)=>{
    let newTweet=document.createElement('li')
    let btag=document.createElement('b')
    btag.append(username)
    newTweet.append(btag)
    newTweet.append(`-${tweet}`)
    // console.log(newTweet);
    tweetContainer.append(newTweet)
}


tweetContainer.addEventListener('click',function(e){
    e.target.nodeName==='li'&&e.target.remove()
    
})
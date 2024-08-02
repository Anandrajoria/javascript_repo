//! document object model


// ! select by id
// const banner= document.getElementById('banner')
// console.dir(banner)

// ! select by tagname
// const images=document.getElementsByTagName('img')
// console.dir(images);

// for(let img of images){
//     img.src='https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

// const link=document.getElementsByTagName('a')
// console.log(link);

// ! select by class
// const image=document.getElementsByClassName('square')
// console.log(image);

//? quary selector
// let tag=document.querySelectorAll('p a')
// for(let link of tag){
//     console.log(link.href);
// }
// console.log(tag);

// console.log(document.querySelector('p').innerText) //! it shows the content of selector
// console.log(document.querySelector('p').textContent) //! it shows all content even the element is hiding

const allLink=document.querySelectorAll('a');
// for(let link of allLink){
//     link.innerText='i am a link'
// }


// const heading=document.querySelector('h1').innerHTML='<i>krishna</i>'
// console.log(heading);

// const firstLink=document.querySelector('a');
// console.log(firstLink.href);
// console.log(firstLink.getAttribute('href'))


// const h2=document.querySelector('h2')
// console.log(h2.classList.add('purple'))
// console.log(h2.classList.remove('border'))
// console.log(h2.classList.toggle('purple'))

// console.log(h2.classList.contains('purple'))



// document.querySelector('img')

const newImg=document.querySelector('img')
// console.log(newImg);

newImg.src='https://www.gettyimages.in/detail/photo/cannonball-jelly-royalty-free-image/2127929960'

// console.log(document.body.appendChild(newImg));

let p=document.querySelector('p')
// console.log(p.append("hello their"));  


let newb=document.createElement('b')
// console.log(newb.append('hi'))

let h2=document.createElement('h2')
console.log(h2.append("are adorable chickens"))


let h1=document.querySelector('h1')
console.log(h1.insertAdjacentElement('afterend',h2))

let h3=document.createElement("h3")
console.log(h3.innerText='i am h3')

h1.after(h3) 

let fli=document.querySelector('li')
let ul=fli.parentElement
console.log(ul);

ul.removeChild(fli)


let bold=document.querySelector("b")
console.log(bold);
// console.log(bold.parentElement.removeChild(bold))

let img=document.querySelector('img')
img.remove()
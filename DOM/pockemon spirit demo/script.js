let container=document.querySelector("#container")
let url='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=1;i<150;i++){

    let pokemon=document.createElement("div")
    pokemon.classList.add('pokemon')
    let span=document.createElement('span')
    span.innerText=`#${i}`

    let newImg=document.createElement('img')
    newImg.src=`${url}${i}.png`

    pokemon.appendChild(newImg)
    pokemon.appendChild(span)

    container.append(pokemon)
}


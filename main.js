/* function createPokemon(id) {

    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    let ul = document.querySelector('#list')

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let name = data.name
        let sprites = data.sprites.front_default
        console.log(sprites)
    
        let li = document.createElement('li')
        let myImage = document.createElement('img')
        
        myImage.src = sprites
        li.textContent = name
        ul.appendChild(li)
        li.appendChild(myImage)

    })
}

function pokemonIterate(start, stop) {
let i = start
while (i <= stop) {
    createPokemon(i);
    i++;
}
}

pokemonIterate(1, 5);

let nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click', () => {
    pokemonIterate(5, 10)
}) */

    let offset = 0
    let nextBtn = document.querySelector('#nextBtn')
    nextBtn.addEventListener('click', () => {
        offset += 5
        createPokemon()
    })


function createPokemon() {

    let urlOne = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`
    let ul = document.querySelector('#list')

    fetch(urlOne)
    .then(response => response.json())
    .then(data => {
        let results = data.results

        results.map(result => {
           let pokeUrl = result.url 
           fetch(pokeUrl)
           .then(response => response.json())
           .then(moreData => {
               let name = moreData.name
               let sprites = moreData.sprites.front_default
              
           
               let li = document.createElement('li')
               let myImage = document.createElement('img')
               
               myImage.src = sprites
               li.textContent = name
               ul.appendChild(li)
               li.appendChild(myImage)
           })
        })
        
    })
}

createPokemon();



/*     .then(data => {
        
        let name = data.name
        let sprites = data.sprites.front_default
       
    
        let li = document.createElement('li')
        let myImage = document.createElement('img')
        
        myImage.src = sprites
        li.textContent = name
        ul.appendChild(li)
        li.appendChild(myImage)

    })
}

function pokemonIterate(start, stop) {
let i = start
while (i <= stop) {
    createPokemon(i);
    i++;
}
}

pokemonIterate(1, 5);

let nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click', () => {
    pokemonIterate(5, 10)
}) */







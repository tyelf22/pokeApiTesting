
let offset = 0
let nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click', () => {
    offset += 5
    createPokemon()
})


async function createPokemon() {

    let urlOne = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`
    let ul = document.querySelector('#list')

    await fetch(urlOne)
    .then(response => response.json())
    .then(data => {
        let results = data.results
        
         results.map(result => {
           let pokeUrl = result.url 
          fetch(pokeUrl)
           .then(response => response.json())
           .then(moreData => {
               console.log(moreData)
               let name = moreData.name


               let sprites = moreData.sprites.front_default
              
           
               let li = document.createElement('li')
               li.style.cursor = 'pointer'
              

              
                let ability = moreData.abilities[0].ability.name
                
                let newAbility = document.createElement('p')

                newAbility.textContent = `Ability: ${ability}`

                newAbility.style.display = 'none';

                //show pokemon ability
                li.addEventListener('click', () => {
                    if(newAbility.style.display === "none") {
                        newAbility.style.display = "block"
                    } else {
                        newAbility.style.display = "none"
                    }
                })


               let myImage = document.createElement('img')
               
               myImage.src = sprites
               li.textContent = name
               li.innerHTML = name + " <span><i class='fa fa-caret-down'></i></span>"
               ul.appendChild(li)
               li.appendChild(myImage)
               ul.appendChild(newAbility)
           })
        })
        
    })
}

createPokemon();








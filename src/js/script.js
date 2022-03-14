const listSelectionPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')

listSelectionPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {

        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open')

        const idSelectedPokemon = pokemon.attributes.id.value

        const idCardPokemonToOpen = 'card-' + idSelectedPokemon
        const cardPokemonToOpen = document.getElementById(idCardPokemonToOpen)
        cardPokemonToOpen.classList.add('open')

        const activePokemonOnList = document.querySelector('.active')
        activePokemonOnList.classList.remove('active')

        const selectedPokemonOnList = document.getElementById(idSelectedPokemon)
        selectedPokemonOnList.classList.add('active')
    })
})
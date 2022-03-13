// 

/*
* Quando clicar no pokemon da listagem, esconder o cartão do pokemon aberto e mostrar o cartão selecionado.

* Trabalhar com 2 elementos
  1- Listagem
  2- Cartão do Pokemon 

* Criar 2 variáveis no JS para trabalhar com os elementos da tela

* Evento de Clique - realizado pelo user na listagem

  - remover a classe aberto  - no cartão que está aberto
  - ao clicar no pokemon da listagem - pegar o ID pra saber qual cartão mostrar
  - remover a classe ativa que marca o pokemon selecionado 
  - adicionar a classe ativo no item selecioando 
*/

// criar duas var no JS para trabalhar com os elementos da tela

const listSelectionPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')


// Evento de Clique - realizado pelo user na listagem

listSelectionPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        //remover a classe aberto  - no cartão que está aberto
        const cardPokemonOpen = document.querySelector('.aberto')
        cardPokemonOpen.classList.remove('aberto')
            // clicar no pokemon da listagem - pegar o ID pra saber qual cartão mostrar

        const idSelectedPokemon = pokemon.attributes.id.value

        const idCardPokemonToOpen = 'card-' + idSelectedPokemon
        const cardPokemonToOpen = document.getElementById(idCardPokemonToOpen)
        cardPokemonToOpen.classList.add('aberto')

        const activePokemonOnList = document.querySelector('.active')
        activePokemonOnList.classList.remove('active')

        const selectedPokemonOnList = document.getElementById(idSelectedPokemon)
        selectedPokemonOnList.classList.add('active')
    })
})
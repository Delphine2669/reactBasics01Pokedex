import { useState } from 'react'
import './App.css'
import Button from './components/NavBar'

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ]


  const handleClickPrevious = () => {
    if (pokemonIndex > 0) { setPokemonIndex(pokemonIndex - 1) }
  }
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) { setPokemonIndex(pokemonIndex + 1) }
  }

  return (


    <div>
      <img src={pokemonList[pokemonIndex].imgSrc} alt="" />


      <h3>{pokemonList[pokemonIndex].name} </h3>
      <Button previous={handleClickPrevious} next={handleClickNext} />


    </div >

  )

}
export default App

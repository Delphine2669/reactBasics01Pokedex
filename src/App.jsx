import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'



function App() {
  //   const [count, setCount] = useState(0)

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
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const previousButton = () => {
    setPokemonIndex((previousIndex) => {
      if (previousIndex > 0) {
        return previousIndex - 1
      }
      else {
        return previousIndex
      }
    })

  }

  const nextButton = () => {
    setPokemonIndex((previousIndex) => {
      if (previousIndex < pokemonList.length - 1) {
        return previousIndex + 1
      }
      else {
        return previousIndex
      }
    }
    )
  }


  return (



    <div>


      <img src={pokemonList[pokemonIndex].imgSrc} alt="" />


      <h3>{pokemonList[pokemonIndex].name} </h3>

      <button onClick={previousButton} disabled={pokemonIndex === 0}>Precedent</button>

      <button onClick={nextButton} disabled={pokemonIndex === pokemonList.length - 1}> Suivant</button>

    </div>

  )

}




export default App

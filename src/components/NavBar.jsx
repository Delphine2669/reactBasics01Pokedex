import React from "react"

function Button({ pokemonList, onClick }) {
    const handleClick = (index) => { onClick(index) }
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {pokemon.name}</button>
            ))}

        </div>
    )
}

export default Button
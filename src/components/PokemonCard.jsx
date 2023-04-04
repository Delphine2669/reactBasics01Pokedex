const PokemonCard = (props) => {
    const pokemon = props.pokemon;
    if (pokemon.imgSrc) {

        return (
            <figure>
                <img src={pokemon.imgSrc} alt={`picture of pokemon ${pokemon.name}`} />
                <figcaption>{pokemon.name}</figcaption> </figure>
        )
    }
    else {
        return <figure>
            <p> ??? </p>
            <figcaption>{pokemon.name}</figcaption> </figure>
    }
}
const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard


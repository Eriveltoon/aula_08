import { useParams } from "react-router-dom"
import React from 'react';
import Tipo from "./tipo";
import Ability from "./ability";

export default function Pokemon(){
    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = React.useState({});
    const [i] = React.useState(pokemonId);

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((pokemon) => {
      setPokemon(pokemon)
    });
    return (
        <>
            <h1>Pokemon {pokemon.name}</h1>


            <div className='pt-3'>
                <p>Peso: {pokemon.weight}</p>    
            </div>
            

            <div className='pt-3'>
                <p>Altura: {pokemon.height}</p>
            </div>

            
        
        </>
    )
}
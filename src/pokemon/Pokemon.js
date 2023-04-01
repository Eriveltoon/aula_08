import { useParams } from "react-router-dom"
import React from 'react';
import Tipo from "./tipo";
import Ability from "./ability";

export default function Pokemon(){
    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = React.useState();
    const [i] = React.useState(pokemonId);

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((pokemon) => {
      setPokemon(pokemon)
    });
    return (
        pokemon ?
        <>
            <h1>Pokemon {pokemon.name}</h1>

            <img className="rounded d-block" style={{height: "150px",width: "150px"}} src={pokemon.sprites.front_default}/>


            <div className='pt-3'>
                <p>Peso: {pokemon.weight}</p>    
            </div>
            

            <div className='pt-3'>
                <p>Altura: {pokemon.height}</p>
            </div>

            <div className='d-flex'>
                <ul>
                    { pokemon.types.map(tipo => <Tipo tipo={tipo} />) }
                </ul>
            </div>

            <div className='d-flex'>
                <ul>
                    { pokemon.abilities.map(ability => <Ability ability={ability.ability} />) }
                </ul>
            </div>
            
        
        </>
        :
        <h1>Carregando</h1>
    )
}
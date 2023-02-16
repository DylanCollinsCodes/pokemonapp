import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Board(props){
    const [pokemon, setPokemon] = useState('')
    const [pokemonName, setPokemonName] = useState('')
    useEffect(()=>{
        if(props.num > 0){
            if(props.poke.url){
                axios.get(props.poke.url).then((result)=>{
                    setPokemon(result.data)
                    })
                    setPokemonName(props.poke.name)
            }else{
            setPokemon(props.poke)
            setPokemonName(props.poke.name)
            }
        }
        else if(props.poke){
            setPokemon(props.poke)
            setPokemonName(props.poke.name)
        }
      },[props.num,props.poke])
    return (
        <div className='pokemon' onClick={()=> props.selectPokemon(pokemon)}>
            {<img src={ pokemon && pokemon.sprites?.front_default } alt=""></img>}
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </div>
    )
}
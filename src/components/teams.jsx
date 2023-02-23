import { useState, useEffect } from 'react';
import axios from 'axios'


export default function Teams(props){
    const [pokemonTeam, setPokemonTeam] = useState([])
    const [teamName, setTeamName] = useState('')
    
    useEffect(()=>{
        if(props.poke){
            let pokemonTeam = props.poke.Pokemon
            let teamName = props.poke.Name
            let pokeData = []
            setTeamName(teamName)
            setPokemonTeam(pokemonTeam)
            for(let i = 0; i < pokemonTeam.length; i++){
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[i]}`).then((res)=>{
                    let data = res.data
                    pokeData.push(data)
                })
            }
            setPokemonTeam(pokeData)
        }
      },[])

    return (
        <div>
            {teamName}
            {pokemonTeam.map((pokemon, index) => <div key={`${pokemon} - ${index}`}>
            {<img src={pokemon.sprites?.front_default} alt=""></img>}
            {pokemon.name}
            </div>)}
        </div>
    )
}
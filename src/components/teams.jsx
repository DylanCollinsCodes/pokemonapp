import { useState, useEffect } from 'react';
import axios from 'axios'


export default function Teams(props){
    const [pokemonTeam, setPokemonTeam] = useState([])
    const [teamName, setTeamName] = useState('')
    
    async function fetchPokeData(){
        setTeamName(props.poke.Name)
            let images = []
            for(let i = 0; i < props.poke.Pokemon.length; i++){
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.poke.Pokemon[i]}`)
                    images.push({
                        Name: res.data.name,
                        Image: res.data.sprites.front_default
                    })
            }
        setPokemonTeam(images)
    }

    useEffect(()=>{
        fetchPokeData()
      },[props.poke])

    return (
        <div className='pokeTeamHolder'>
            <div className='teamTopper'>{teamName}</div>
            <div className='teamTopper'><button className='teamDeleteButton' onClick={(teamNam) => props.deleteTeam(teamName)}>Delete Team</button></div>
            {pokemonTeam.map((pokemon, index) => <div className='pokeSprites' key={`${pokemon} - ${index}`}>
            {<img src={pokemon.Image} alt=""></img>}
            <div className='pokemonInTeamName'>{`${pokemon.Name.charAt(0).toUpperCase()}${pokemon.Name.slice(1)}`}</div>
            </div>)}
        </div>
    )
}
import reducer from '../state/reducer'
import { useEffect, useReducer, useState } from 'react'
import initialState from '../state/initialstate'
import axios from 'axios'
import Teams from '../components/teams'
import '../style/pokemon.css'
import Board from '../components/board'

const TeamBuilder = () => {
  const [ {num,pokemonList,selectedPokemon,pokeOneWeakToTwo,pokeTwoWeakToOne,specificPokemon,pokeOneWeaknesses,pokeTwoWeaknesses,pokemonTeam,teamName,allPokeTeams}, dispatch ] = useReducer(reducer,initialState)

  function getSpecificPokemon(){
    if(specificPokemon){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${specificPokemon.toLowerCase()}`).then((res)=>{
        dispatch({type: 'FETCH_POKEMON_TEAM', payload: res.data})
    })
    }
  }

  function savePokemonTeam(teamName){
    if(teamName.length > 0){
      let pokeNames = []
      if(pokemonTeam.length > 0){
        for(let i = 0; i < pokemonTeam.length; i++){
          pokeNames.push(pokemonTeam[i].name)
        }
        localStorage.setItem(teamName, JSON.stringify(pokeNames))
      }    
    }
  }

  function loadPokemonTeams(){
    let allTeams = []
    for (let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i) === 'debug')continue
      let arrPoke;
      let poke = localStorage.getItem(localStorage.key(i))
      let pokesTeam = {
        Name: localStorage.key(i),
        Pokemon: []
      }
      arrPoke = JSON.parse(poke)
      for(let j = 0; j < arrPoke.length; j++){
      let pokeName = arrPoke[j]
      pokesTeam.Pokemon.push(pokeName)
      }
      allTeams.push(pokesTeam)
  }
  console.log(allTeams)
  dispatch({type: 'SET_POKEMON_TEAMS', payload: allTeams})
}

  return (
    <div>
        <form onSubmit={((e)=>{
            e.preventDefault()
            getSpecificPokemon()
            })}>
            <input className="pokeInput" placeholder='Type a pokemon' value = {specificPokemon.name} onChange={(event)=> dispatch({type: 'ADD_SPECIFIC_POKEMON', payload: event.target.value})}></input>
            <button className="pokeButton">Select Pokemon</button>
        </form>

        <form onSubmit={(e)=>{
          e.preventDefault()
          savePokemonTeam(teamName)
        }}>
        <input placeholder='Team Name' value = {teamName} onChange={(event) => dispatch({type: 'POKEMON_TEAM_NAME', payload: event.target.value})}></input>
        <button>Save Team</button>
        </form>
        <button onClick={loadPokemonTeams}>Load Teams</button>

        <div id='pokemonHolder'>
          {pokemonTeam.map((poke, index)=>(
          poke && <Board poke = {poke} allPokeTeams = {allPokeTeams} key = {index}/>
          ))}
        </div>

        <div>
          {allPokeTeams.reverse().map((poke, index)=>( 
          poke && <Teams poke = {poke} key = {index}/>
          ))}
        </div>
    </div>
  );
};
  
export default TeamBuilder;
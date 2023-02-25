import reducer from '../state/reducer'
import { useEffect, useReducer, useState } from 'react'
import initialState from '../state/initialstate'
import axios from 'axios'
import Teams from '../components/teams'
import '../style/teambuilder.css'
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
    let allPokeTeams = []
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
      allPokeTeams.push(pokesTeam)
  }
  console.log(allPokeTeams)
  dispatch({type: 'SET_POKEMON_TEAMS', payload: allPokeTeams})
}

function deleteTeam(teamName){
  for(let i = 0; i < allPokeTeams.length; i++){
    if(allPokeTeams[i].Name === teamName){
      localStorage.removeItem(teamName)
      allPokeTeams.splice(i, 1)
    }
  }
  dispatch({type: 'SET_POKEMON_TEAMS', payload: allPokeTeams})
}

  return (
    <div>
      <div id='teamBuilderBox'>
      <form className='teamForm' onSubmit={((e)=>{
            e.preventDefault()
            getSpecificPokemon()
            })}>
            <input className='teamInputBox' placeholder='Type a pokemon' value = {specificPokemon.name} onChange={(event)=> dispatch({type: 'ADD_SPECIFIC_POKEMON', payload: event.target.value})}></input>
            <button>Select Pokemon</button>
        </form>

        <form className='teamForm' onSubmit={(e)=>{
          e.preventDefault()
          savePokemonTeam(teamName)
        }}>
        <input className='teamInputBox' placeholder='Team Name' value = {teamName} onChange={(event) => dispatch({type: 'POKEMON_TEAM_NAME', payload: event.target.value})}></input>
        <button>Save Team</button>
        </form>
        <div>
          <button className='loadTeamsButton' onClick={loadPokemonTeams}>Load Teams</button>
        </div>
      </div>
        
        <div id='pokemonHolder'>
          {pokemonTeam.map((poke, index)=>(
          <Board poke = {poke} key = {index}/>
          ))}
        </div>

        <div id='pokeTeamHolderMain'>
          {allPokeTeams.reverse().map((poke, index)=>(
           poke && <Teams poke = {poke} key = {index} deleteTeam = {deleteTeam}/>
          ))}
        </div>
    </div>
  );
};
  
export default TeamBuilder;
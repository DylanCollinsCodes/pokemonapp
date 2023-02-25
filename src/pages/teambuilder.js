import reducer from '../state/reducer'
import { useEffect, useReducer, useState } from 'react'
import initialState from '../state/initialstate'
import axios from 'axios'
import Teams from '../components/teams'
import '../style/teambuilder.css'
import Board from '../components/board'

const TeamBuilder = () => {
  const [ {num,pokemonList,selectedPokemon,pokeOneWeakToTwo,pokeTwoWeakToOne,specificPokemon,pokeOneWeaknesses,pokeTwoWeaknesses,pokemonTeam,teamName,allPokeTeams}, dispatch ] = useReducer(reducer,initialState)

  function getSpecificPokemon(specificPokemon){
    if(specificPokemon){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${specificPokemon.toLowerCase()}`).then((res)=>{
        dispatch({type: 'FETCH_POKEMON_TEAM', payload: res.data})
    })
    }
    dispatch({type: 'ADD_SPECIFIC_POKEMON', payload: ''})
  }

  function savePokemonTeam(teamName){
    if(teamName.length > 0){
      let pokeNames = []
      if(pokemonTeam.length > 0){
        for(let i = 0; i < pokemonTeam.length; i++){
          pokeNames.push(pokemonTeam[i].name)
        }
        localStorage.setItem(teamName, JSON.stringify(pokeNames))
      }else{
        localStorage.removeItem(teamName)
      }
      loadPokemonTeams()
      dispatch({type: 'POKEMON_TEAM_NAME_POKETEAM'})
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

function clearTeams(){
  dispatch({type: 'CLEAR_POKE_TEAMS'})
}

function updateTeam(teamName){
  dispatch({type: 'DELETE_POKEMON_TEAM'})
  let updatedTeam = localStorage.getItem(teamName)
  updatedTeam = JSON.parse(updatedTeam)
  for(let i = 0; i < allPokeTeams.length; i++){
    if(allPokeTeams[i].Name === teamName){
      allPokeTeams.splice(i, 1)
    }
  }
  dispatch({type: 'UPDATE_TEAMS', payload: teamName})
  for(let i = 0; i < updatedTeam.length; i++){
    getSpecificPokemon(updatedTeam[i])
  }
}

function selectPokemon(clickedPokemon){
  console.log(pokemonTeam)
  for(let i = 0; i < pokemonTeam.length; i++){
    if(clickedPokemon === pokemonTeam[i]){
      pokemonTeam.splice(i,1)
    }
  }
  dispatch({type: 'UPDATE_POKEMON_TEAM', payload: pokemonTeam})
}

  return (
    <div>
      <div id='teamBuilderBox'>
      <form id='teamFormOne' className='teamForm' onSubmit={((e)=>{
            e.preventDefault()
            getSpecificPokemon(specificPokemon)
            })}>
            <input className='teamInputBox' placeholder='Type a pokemon' value = {specificPokemon} onChange={(event)=> dispatch({type: 'ADD_SPECIFIC_POKEMON', payload: event.target.value})}></input>
            <button>Select Pokemon</button>
        </form>

        <form id='teamFormTwo' className='teamForm' onSubmit={(e)=>{
            e.preventDefault()
            savePokemonTeam(teamName)
          }}>
          <input className='teamInputBox' placeholder='Team Name' value = {teamName} onChange={(event) => dispatch({type: 'POKEMON_TEAM_NAME', payload: event.target.value})}></input>
          <button>Save Team</button>
          </form>
        <div>
          <button className='loadTeamsButton' onClick={loadPokemonTeams}>Load Teams</button>
        </div>
        <div>
          <button onClick={clearTeams} className='clearTeamsButton'>Clear Teams</button>
        </div>
      </div>
        
      <div id='pokemonHolder'>
        {pokemonTeam.map((poke, index)=>(
        <Board poke = {poke} key = {index} selectPokemon = {selectPokemon}/>
        ))}
      </div>

      <div id='pokeTeamHolderMain'>
        {allPokeTeams.map((poke, index)=>(
         poke && <Teams poke = {poke} key = {index} deleteTeam = {deleteTeam} updateTeam = {updateTeam}/>
        ))}
      </div>
    </div>
  );
};
  
export default TeamBuilder;
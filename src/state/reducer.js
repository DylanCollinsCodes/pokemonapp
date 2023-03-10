export default function reducer(state,action){
    const {num,pokemonList,selectedPokemon,pokeOneWeakToTwo,pokeTwoWeakToOne,specificPokemon,pokeOneWeaknesses,pokeTwoWeaknesses,pokemonTeam,teamName,allPokeTeams} = state
    switch(action.type){
      case 'FETCH_POKEMON':
        return {...state,pokemonList: action.payload}

      case 'SET_POKEMON_TEAMS':
        return{...state,allPokeTeams: action.payload}

      case 'FETCH_SINGLE_POKEMON':
        return {...state,pokemonList: [...pokemonList,action.payload]}

      case 'FETCH_POKEMON_TEAM':
        if(pokemonTeam.length >= 6)pokemonTeam.shift()
        return {...state,pokemonTeam: [...pokemonTeam,action.payload]}

      case 'DELETE_POKEMON_TEAM':
        return {...state, pokemonTeam: []}

      case 'INCREMENT':
        return {...state, num: num + 1}  
        
      case 'DECREMENT':
        return {...state, num: num - 1}

      case 'SET_NUM':
        return {...state, num: +action.payload}

      case 'UPDATE_SELECTED_POKEMON':
        return {...state,...action.payload}

      case 'ADD_SPECIFIC_POKEMON':
        return {...state,specificPokemon: action.payload}

      case 'UPDATE_POKEMON_TEAM':
        return {...state,pokemonTeam: pokemonTeam}

      case 'POKEMON_TEAM_NAME':
        return {...state,teamName: action.payload}

      case 'UPDATE_TEAMS':
        return {...state, teamName: action.payload}

      case 'POKEMON_TEAM_NAME_POKETEAM':
        return {...state,teamName: '', pokemonTeam: []}
      
      case 'CLEAR_POKE_TEAMS':
        return {...state,allPokeTeams: []}

      default:
        console.log(`${action.type} is an invalid  update`)
        return 
    }
  }
export default function reducer(state,action){
    const {num,pokemonList,selectedPokemon,pokeOneWeakToTwo,pokeTwoWeakToOne,specificPokemon,pokeOneWeaknesses,pokeTwoWeaknesses} = state
    switch(action.type){
      case 'FETCH_POKEMON':
        return {...state,pokemonList: action.payload}

      case 'FETCH_SINGLE_POKEMON':
        return {...state,pokemonList: [...pokemonList,action.payload]}

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

      default:
        console.log(`${action.type} is an invalid  update`)
        return 
    }
  }
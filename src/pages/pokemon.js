import '../style/pokemon.css'
import { useReducer, useEffect } from 'react'
import axios from 'axios'
import Board from '../components/board'
import ComparePokemon from '../components/comparePokemon'
import reducer from '../state/reducer'
import initialState from '../state/initialstate'
import typeWeaknesses from '../state/typeWeaknesses'
import typeResistances from '../state/typeResistances'

const Pokemon = () => {
    const [ {num,pokemonList,selectedPokemon,pokeOneWeakToTwo,pokeTwoWeakToOne,specificPokemon,pokeOneWeaknesses,pokeTwoWeaknesses}, dispatch ] = useReducer(reducer,initialState)
    
    useEffect(()=>{
        if(num > 0){
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`).then((res)=>{
            dispatch({type: 'FETCH_POKEMON', payload: res.data.results})
        })
        }else{
            dispatch({type: 'FETCH_POKEMON', payload: []})
        }
    },[num])

    function getSpecificPokemon(){
        if(specificPokemon){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${specificPokemon.toLowerCase()}`).then((res)=>{
            dispatch({type: 'FETCH_SINGLE_POKEMON', payload: res.data})
        })
        }
    }

    function selectPokemon(clickedPokemon){
        const previousSelectedPokemon = selectedPokemon
        let oneWeakToTwo = false
        let twoWeakToOne = false
        const pokeOneWeak = []
        const pokeTwoWeak = []
        const pokeOneResistance = []
        const pokeTwoResistance = []
        let weaknessCountOne = 0
        let weaknessCountTwo = 0
        
        if(previousSelectedPokemon.length > 1)previousSelectedPokemon.shift()

        previousSelectedPokemon.push(clickedPokemon)

        if(previousSelectedPokemon.length > 1){
            
            const tempTypesOne = () => {
                let pokemonTypesOne = []
                let i = 0
                for(i = 0; i < previousSelectedPokemon[0].types.length; i++){
                    pokemonTypesOne.push(previousSelectedPokemon[0].types[i].type.name)
                }
                return pokemonTypesOne
            }
            const tempTypesTwo = () => {
                let pokemonTypesTwo = []
                let i = 0
                for(i = 0; i < previousSelectedPokemon[1].types.length; i++){
                    pokemonTypesTwo.push(previousSelectedPokemon[1].types[i].type.name)
                }
                return pokemonTypesTwo
            }
            const typesOne = tempTypesOne()
            const typesTwo = tempTypesTwo()

            if(typesOne.length > 0 && typesTwo.length > 0){
                let i;
                let j;
                for(i = 0; i < typesOne.length;i++){
                    let weakTester = typeWeaknesses[typesOne[i]]
                    for(j = 0; j < weakTester.length; j++){
                        if(typesTwo.includes(weakTester[j])){
                            oneWeakToTwo = true
                            if(!pokeOneWeak.includes(weakTester[j])){
                                pokeOneWeak.push(weakTester[j])
                            }
                            weaknessCountOne += 1
                        }
                    }
                }
                for(i = 0; i < typesTwo.length;i++){
                    let weakTester = typeWeaknesses[typesTwo[i]]
                    for(j = 0; j < weakTester.length; j++){
                        if(typesOne.includes(weakTester[j])){
                            twoWeakToOne = true
                            if(!pokeTwoWeak.includes(weakTester[j])){
                                pokeTwoWeak.push(weakTester[j])
                            }
                            weaknessCountTwo += 1
                        }
                    }
                }
                for(i = 0; i < typesOne.length; i++){
                    let pokeResistance = typeResistances[typesOne[i]]
                    for(j = 0; j < pokeResistance.length; j++){
                        pokeOneResistance.push(pokeResistance[j])
                    }
                }
                for(i = 0; i < typesTwo.length; i++){
                    let pokeResistance = typeResistances[typesTwo[i]]
                    for(j = 0; j < pokeResistance.length; j++){
                        pokeTwoResistance.push(pokeResistance[j])
                    }
                }
                for(i = 0; i < pokeOneWeak.length; i++){
                    let weakTester = pokeOneWeak[i]
                    if(pokeOneResistance.includes(weakTester)){
                        pokeOneWeak.splice(i,1)
                        weaknessCountOne -= 1
                        if(weaknessCountOne === 0){
                            oneWeakToTwo = false
                        }
                    }
                }
                for(i = 0; i < pokeTwoWeak.length; i++){
                    let weakTester = pokeTwoWeak[i]
                    if(pokeTwoResistance.includes(weakTester)){
                        pokeTwoWeak.splice(i,1)
                        weaknessCountTwo -= 1
                        if(weaknessCountTwo === 0){
                            twoWeakToOne = false
                        }
                    }
                }
            }
        }
        dispatch({type: 'UPDATE_SELECTED_POKEMON', payload: {selectedPokemon: previousSelectedPokemon, pokeOneWeakToTwo: oneWeakToTwo, pokeTwoWeakToOne: twoWeakToOne, pokeOneWeaknesses: pokeOneWeak, pokeTwoWeaknesses: pokeTwoWeak}})
    }
    return (
      <div className="App">
        <div id='fixedDiv'>
            
            <ComparePokemon oneWeakToTwo = {pokeOneWeakToTwo} twoWeakToOne = {pokeTwoWeakToOne} pokeArray = {selectedPokemon} pokeOneWeaknesses = {pokeOneWeaknesses} pokeTwoWeaknesses = {pokeTwoWeaknesses}/>

            <div id='pokeInfoBox'>
                <input class="pokeInput" type='number' value={num || ''} placeholder='Number of Pokemon' onChange={(event)=> dispatch({type: 'SET_NUM', payload: event.target.value})}></input>
                <button class="pokeButton" onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
                <button class="pokeButton" onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
                <p>Type in a Pokemon</p>
                <form onSubmit={((e)=>{
                    e.preventDefault()
                    getSpecificPokemon()
                    })}>
                <input class="pokeInput" placeholder='Type a pokemon' value = {specificPokemon.name} onChange={(event)=> dispatch({type: 'ADD_SPECIFIC_POKEMON', payload: event.target.value})}></input>
                <button class="pokeButton">Select Pokemon</button>
                </form>
            </div>            
        </div>
        
        <div id='pokemonHolder'>
            {pokemonList.map((poke, index)=>(
            poke && <Board poke = {poke} key = {index} selectPokemon = {selectPokemon} num = {num}/>
            ))}
        </div>
      </div>
    );
  }
  
export default Pokemon;
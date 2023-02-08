import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './components/board'
import ComparePokemon from './components/comparePokemon'


const typeWeaknesses = {
  grass: ['flying','bug','fire','ice','poison'],
  fire: ['ground','rock','water'],
  water: ['electric','grass'],
  bug: ['fire','flying','rock'],
  dark: ['bug','fairy','fighting'],
  dragon: ['dragon','fairy','ice'],
  electric: ['ground'],
  fairy: ['poison','steel'],
  fighting: ['fairy','flying','psychic'],
  flying: ['electric','ice','rock'],
  ghost: ['dark','ghost'],
  ground: ['grass','ice','water'],
  ice: ['fighting','rock','fire','steel'],
  normal: ['fighting'],
  poison: ['ground','psychic'],
  psychic: ['bug','dark','ghost'],
  rock: ['fighting','grass','ground','steel','water'],
  steel: ['fighting','fire','ground'],
}

function App() {
  const [num, setNum] = useState(0)
  const [pokemon, setPokemon] = useState(null)
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [oneWeakToTwo, setOneWeakToTwo] = useState(false)
  const [twoWeakToOne, setTwoWeakToOne] = useState(false)

  useEffect(()=>{
    if(num > 0){
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`).then((res)=>{
      setPokemonList(res.data.results)
      // console.log(res.data.results)
    })
    }else{
      setPokemonList([])
    }
  },[num])
  function selectPokemon(clickedPokemon){
    console.log('hit')
    setSelectedPokemon((previousSelectedPokemon)=>{
      console.log('hitTwo')
      if(previousSelectedPokemon.length > 2)previousSelectedPokemon.shift()
      previousSelectedPokemon.push(clickedPokemon)
      console.log(previousSelectedPokemon)
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
          let i = 0
          let j = 0
        setOneWeakToTwo((previousOneWeakToTwo) => {
          previousOneWeakToTwo = false
          for(i; i < typesOne.length;i++){
              let weakTester = typeWeaknesses[typesOne[i]]
              for(j; j < weakTester.length; j++){
                  if(typesTwo.includes(weakTester[j])){
                      previousOneWeakToTwo = true
                  }
              }
          }
          return previousOneWeakToTwo
        })
        setTwoWeakToOne((previousTwoWeakToOne) => {
          previousTwoWeakToOne = false
          for(i = 0; i < typesTwo.length;i++){
              let weakTesterTwo = typeWeaknesses[typesTwo[i]]
              for(j = 0; j < weakTesterTwo.length; j++){
                  if(typesOne.includes(weakTesterTwo[j])){
                      previousTwoWeakToOne = true
                  }
              }
          }
          return previousTwoWeakToOne
        })
          
          console.log(oneWeakToTwo)
          console.log(twoWeakToOne)
      }
        // const tempTypesOne = () => {
        //     let pokemonTypesOne = []
        //     let i = 0
        //     for(i = 0; i < previousSelectedPokemon[0].types.length; i++){
        //         pokemonTypesOne.push(previousSelectedPokemon[0].types[i].type.name)
        //     }
        //     return pokemonTypesOne
        // }
        // const tempTypesTwo = () => {
        //     let pokemonTypesTwo = []
        //     let i = 0
        //     for(i = 0; i < previousSelectedPokemon[1].types.length; i++){
        //         pokemonTypesTwo.push(previousSelectedPokemon[1].types[i].type.name)
        //     }
        //     return pokemonTypesTwo
        // }
        // const typesOne = tempTypesOne()
        // const typesTwo = tempTypesTwo()
        // console.log(typesOne)
        // console.log(typesTwo)
        if(typesOne.length > 0 && typesTwo.length > 0){
            let i = 0
            let j = 0
            for(i; i < typesOne.length;i++){
                let weakTester = typeWeaknesses[typesOne[i]]
                // eval(typeWeak)
                for(j; j < weakTester.length; j++){
                    if(typesTwo.includes(weakTester[j])){
                        setOneWeakToTwo(true)
                    }
                }
            }
            for(i = 0; i < typesTwo.length;i++){
                let weakTesterTwo = typeWeaknesses[typesTwo[i]]
                for(j = 0; j < weakTesterTwo.length; j++){
                    if(typesOne.includes(weakTesterTwo[j])){
                        setTwoWeakToOne(true)
                    }
                }
            }
            console.log(oneWeakToTwo)
            console.log(twoWeakToOne)
        }
    }
      return previousSelectedPokemon
    })
  }
  function updateCompare(){

  }
  return (
    <div className="App">
      <p>
      {num}
      </p>
      <ComparePokemon oneWeakToTwo = {oneWeakToTwo} twoWeakToOne = {twoWeakToOne} pokeArray = {selectedPokemon}/>
      <button onClick={()=> setNum(num + 1)}>Incrementer</button>
      <button onClick={()=> setNum(num - 1)}>Decrementer</button>
      <button onClick={()=> setSelectedPokemon([])}>Refresh</button>
      <input value={num} onChange={(event)=>setNum(+event.target.value)}></input>
      {pokemonList.map((poke, index)=>(
      <Board poke = {poke} key = {index} selectPokemon={selectPokemon}/>
      ))}
    </div>
  );
}

export default App
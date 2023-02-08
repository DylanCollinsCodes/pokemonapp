import { useState, useEffect } from 'react';

export default function ComparePokemon(props){
    const [pokeTextOne,setPokeTextOne] = useState('')
    const [pokeTextTwo,setPokeTextTwo] = useState('')

    useEffect(()=>{
        if(props.pokeArray.length > 1){
            if(props.oneWeakToTwo){
            setPokeTextOne(`${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)} is weak to ${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)}`)
            }else{
                setPokeTextOne(`${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)} isn't weak to ${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)}`)
            }
            if(props.twoWeakToOne){
                setPokeTextTwo(`${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)} is weak to ${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)}`)
            }else{
                setPokeTextTwo(`${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)} isn't weak to ${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)}`)
            }
        }
    },[props.pokeArray, props.oneWeakToTwo, props.twoWeakToOne, props.pokeOneWeaknesses, props.pokeTwoWeaknesses])

    return(
        <div>
            <div id='pokeInformation'>
                <div id='pokeSprites'>
                    {props.pokeArray.map((poke, index)=>
                    <div className='compareBox' key={`${poke.name} - ${index}`}>
                    {<img src={ props.pokeArray[index].sprites.front_default } alt=""></img>}
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} is selected
                    </div>)}
                </div>
                <div id='pokeText'>
                    <div className='pokeText'>{pokeTextOne}</div>
                    <div className='pokeText'>{pokeTextTwo}</div>
                    {props.pokeOneWeaknesses.map((weakness, index) => <div className='pokeText' key={`${weakness} - ${index}`}>{`${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)}`} can use {`${weakness} attacks for a super effective STAB bonus`} against {`${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)}`}</div>)}
                    {props.pokeTwoWeaknesses.map((weakness, index) => <div className='pokeText' key={`${weakness} - ${index}`}>{`${props.pokeArray[0].name.charAt(0).toUpperCase() + props.pokeArray[0].name.slice(1)}`} can use {`${weakness} attacks for a super effective STAB bonus`} against {`${props.pokeArray[1].name.charAt(0).toUpperCase() + props.pokeArray[1].name.slice(1)}`}</div>)}
                </div>
            </div>
        </div>
    )
}
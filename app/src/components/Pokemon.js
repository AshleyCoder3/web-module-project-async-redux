import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { randomPokemon } from '../actions'

const Style = styled.div`
text-align: center;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfnlWB15MBuHxE0Im_XkYamFnu1S8_yEkCA&usqp=CAU');
background-repeat: no-repeat;
background-position: center;
background-size: 100%;
img{ 
  width: 10rem;
  height: 10rem}
button{
  border-radius: 3rem;
  padding: 1rem;
  background-color: blue;
  color: white;
}  
`


const Pokemon = ({ pokemon, isFetching, error, ...props }) => {
  useEffect(() => {
    props.randomPokemon()
  }, [])

  //commented out things not working propely ither
  //console.log('picture', pokemon.sprites.front_default)
  return (
    <Style>
      <h1> My Pokemon App </h1>
      {pokemon.sprites && <img src={pokemon.sprites.front_default}
        alt={pokemon.name} />}
      <h2>{pokemon.name}</h2>
      {pokemon.types && <p>Type: {pokemon.types[0].type.name}</p>}
      <p>Weight: {pokemon.weight}kg (move decimal to the left once)</p>
      <p>Height: {pokemon.height}m (move decimal to the left once)</p>

      <button onClick={() => props.randomPokemon()}>
        <img src="https://emoji.gg/assets/emoji/pokeball.png" alt="pokeball" />
      </button>

    </Style>
  )
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { randomPokemon })(Pokemon)
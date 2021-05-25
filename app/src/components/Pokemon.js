import React from 'react'
import { connect } from 'react-redux'

import { randomPokemon } from '../actions'

const Pokemon = ({ pokemon, isFetching, error, randomPokemon }) => {

  return (
    <div>
      <p>picture: sprites.other.official-artwork</p>
      <h2>Pokemon Name:</h2>
      <p>types.type.name</p>
      <p>weight: </p>
      <p>hight:</p>
      <button onClick={() => randomPokemon()}>Get New Pokemon</button>
    </div>
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
// http://pokeapi.co/api/v2/pokemon/
import Axios from 'axios'

/// action types
export const SET_FETCHING_POKEMON = 'SET_FETCHING_POKEMON'
export const SET_POKEMON_SUCESS = 'SET_POKEMON_SUCESS'

// action creators
export const randomPokemon = () => (dispatch) => {
  function randomXToY(minVal, maxVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return Math.round(randVal);

  }
  const random = randomXToY(1, 898); console.log('random number working in api call')
  dispatch({ type: SET_FETCHING_POKEMON })
  Axios.get(`http://pokeapi.co/api/v2/pokemon/${random}`)
    .then(res => {
      console.log('ab: actions: randomPokemon: res', res)
      dispatch({ type: SET_POKEMON_SUCESS, payload: res.data })
    })
}
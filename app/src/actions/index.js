// http://pokeapi.co/api/v2/pokemon/
import Axios from 'axios'

function randomXToY(minVal, maxVal) {
  var randVal = minVal + (Math.random() * (maxVal - minVal));
  return Math.round(randVal);
}
const random = randomXToY(1, 898)
/// action types
export const SET_FETCHING_POKEMON = 'SET_FETCHING_POKEMON'

// action creators
export const randomPokemon = () => (dispatch) => {
  dispatch({ type: SET_FETCHING_POKEMON })
  Axios.get(`http://pokeapi.co/api/v2/pokemon/${random}`)
    .then(res => {
      console.log('ab: actions: randomPokemon: res', res)
    })
}
//imports
import { SET_FETCHING_POKEMON, SET_POKEMON_SUCESS } from '../actions'

//initial state
const initialState = {
  pokemon: {},
  isFetching: false,
  error: ''
}

//reducer

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING_POKEMON:
      return {
        ...state,
        isFetching: true
      }
    case SET_POKEMON_SUCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: { ...action.payload }
      }

    default:
      return state
  }

}
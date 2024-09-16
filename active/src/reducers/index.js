//imports
import { SET_FETCHING_ACTIVITY, SET_BORED_SUCCESS } from '../actions'

//initial state
const initialState = {
    task: {},
    isFetching: false,
    error: ''
}

//reducer

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING_ACTIVITY:
            return {
                ...state,
                isFetching: true
            }
        case SET_BORED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                task: action.payload
            }

        default:
            return state
    }

}
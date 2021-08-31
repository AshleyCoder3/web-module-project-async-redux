// https://www.boredapi.com/
import axios from 'axios'

//action types
export const SET_FETCHING_ACTIVITY = 'SET_FETCHING_ACTIVITY'
export const SET_BORED_SUCCESS = 'SET_BORED_SUCCESS'

// actions creators

//https://www.boredapi.com/api/activity/?type=diy${activityType}
export const activities = (activityType) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get(`https://www.boredapi.com/api/activity/?type=${activityType}`)
            .then(res => {
                dispatch(fetchSuccess(res.data))
                console.log("🚀 ~ file: index.js ~ line 16 ~ activities ~ res.data", res.data)
            })
    }
}

export const fetchStart = () => {
    return ({ type: SET_FETCHING_ACTIVITY })
}
export const fetchSuccess = (activity) => {
    return ({ type: SET_BORED_SUCCESS, payload: activity })
}
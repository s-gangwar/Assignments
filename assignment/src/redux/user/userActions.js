import { FETCH_USER_REQUEST , FETCH_USER_SUCCESS , FETCH_USER_FAILURE } from './userTypes'
import axios from 'axios'

export const fetchUsersRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers =()=>{
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://www.breakingbadapi.com/api/characters')
            .then(response=>{
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error=>{
                const errmsg = error.message
                dispatch(fetchUsersFailure(errmsg))
            })
    }
}

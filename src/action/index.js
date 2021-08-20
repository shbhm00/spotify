const DATA=require('../dummy_data/albumCategories')
import {Login,Login1,Data} from './actionTypes'
export const doLogin = (payload) => {
    return dispatch => {
        dispatch({
            type: Login,
            payload: payload
        })
    }
}
export const action = () => {
    return dispatch => {
        dispatch({
            type: Login1,
        })
    }
}

export const fetchData=(payload)=>{
    return dispatch=>{
        dispatch({
            type:Data,
            payload:DATA
        })
    }
}
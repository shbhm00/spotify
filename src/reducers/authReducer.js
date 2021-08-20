import {Login,Login1,Data} from '../action/actionTypes'
const DATA=require('../dummy_data/albumCategories')
const initialState = {
    name: 'Shubham Mishra',
    email:'Shbhm00@gmail.com',
    password:'shbhmmshr',
    item:[],
    loggedIn: false,

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Login:
            return { ...state, ...action.payload }
        case  Login1:
            return{...state,loggedIn:!state.loggedIn}
        case Data:
            return{...state, item:DATA}
        default:
            return state;
    }
}
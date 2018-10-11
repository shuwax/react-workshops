import {createAction, handleActions} from 'redux-actions';

const FETCHING_USERS = 'FETCHING_USERS';
const ADD_USERS = 'ADD_USERS';

const defaultState = {
    usersList: [{id: 1000, name:'Sebastian Cytawa'}],
    fetching: false
};

export const fetchingUsers = createAction(FETCHING_USERS);
export const addUsers = createAction(ADD_USERS);


export default handleActions({
   [FETCHING_USERS] : (state, action) => {
       return ({...state, fetching: action.payload});
   },
   [ADD_USERS] : (state,action) => {
       return {...state,usersList: [...state.usersList, ...action.payload], fetching: false};
   }
},defaultState);
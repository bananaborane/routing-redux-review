import {createStore} from 'redux';

const initialState = {
  username: '',
  password: '' 
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

function reducer(state = initialState, action){
  const {type, payload} = action
  switch (type){
    case UPDATE_USERNAME:
      return {...state, username: payload};
    case UPDATE_PASSWORD:
      return {...state, password: payload}
    default:
      return state
  }
}

export default createStore(reducer)
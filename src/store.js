import {createStore} from 'redux';

const initialState = {
  username: '',
  password: '',
  picURL: '' 
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';

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

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
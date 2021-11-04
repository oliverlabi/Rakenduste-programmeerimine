import { POST_ADD, POST_REMOVE, USER_LOGIN, USER_LOGOUT, POSTS_UPDATE } from "./actions";
import update from 'immutability-helper';

const postReducer = (state, action) => {
  switch(action.type){
    case POST_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case POST_REMOVE:
      return {
        ...state,
        data: state.data.filter(post => post.id !== action.payload)
      }
    case POSTS_UPDATE:
      const newData = [];
        return {
          ...state,
          data: newData.concat(action.payload)
        }
    default:
      return state;
  }
}

const authReducer = (state, action) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        email: null
      }
    default:
      return state
  }
}

export { postReducer, authReducer }
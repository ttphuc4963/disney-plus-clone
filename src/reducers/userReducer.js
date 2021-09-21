import { SET_USER_LOGIN, SET_SIGN_OUT } from '../actions/types';
const INITIAL_STATE = {
  name: '',
  email: '',
  photo: '',
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      };
    case SET_SIGN_OUT:
      return {
        ...state,
        name: null,
        email: null,
        photo: null,
      };
    default:
      return state;
  }
};

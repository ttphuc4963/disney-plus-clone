import { SET_MOVIES, SET_USER_LOGIN, SET_SIGN_OUT } from './types';

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const setUserLogin = (user) => {
  return {
    type: SET_USER_LOGIN,
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: SET_SIGN_OUT,
  };
};

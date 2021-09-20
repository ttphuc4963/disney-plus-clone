import { SET_MOVIES, SELECT_MOVIES } from './types';

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const selectMovies = () => {
  return {
    type: SELECT_MOVIES,
  };
};

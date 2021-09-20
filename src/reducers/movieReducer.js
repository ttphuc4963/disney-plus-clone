import { SET_MOVIES, SELECT_MOVIES } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...state, ...action.payload];
    case SELECT_MOVIES:
      return state.movies;
    default:
      return state;
  }
};

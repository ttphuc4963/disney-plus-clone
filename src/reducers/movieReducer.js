import { SET_MOVIES } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;

    default:
      return state;
  }
};

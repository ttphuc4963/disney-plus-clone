// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { createStore } from 'redux';
import reducers from '../reducers';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = createStore(reducers);

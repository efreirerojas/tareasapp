import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tareasReducer from './tareasSlice';

const store = configureStore({
  reducer: {
    tareas: tareasReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

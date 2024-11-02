import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './services/Todo-Slice.js'

const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
  },
});

export default store;

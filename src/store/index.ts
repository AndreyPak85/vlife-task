import { combineReducers, configureStore } from '@reduxjs/toolkit';
//slices
import usersSlice from './Users/UsersSlice';

const rootReducer = combineReducers({
  users: usersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { createSlice } from '@reduxjs/toolkit';
import { userSliceState, IUsersSlice } from '../../ts/users';

import { asyncGetUsersThunk } from './UsersThunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: userSliceState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetUsersThunk.pending, (state, action) => {});
    builder.addCase(asyncGetUsersThunk.fulfilled, (state, action) => {
      action.payload.forEach((element: IUsersSlice) => {
        state.users.push(element);
      });
    });
    builder.addCase(asyncGetUsersThunk.rejected, (state, action) => {});
  },
});

export default usersSlice.reducer;
